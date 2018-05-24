
TicketFactoryContract = {}
TicketOwnershipContract = {}

var displayData = `<img src="images/${event.id}.png" class="img-responsive" alt="Image">
        <div class="caption">
          <h3 class="text-center">${event.name}</h3>
          <div class="row">
            <div class="col-sm-12 text-justify">                
                  <p> ${event.description} </p> 
            </div>
          </div>
          <div class="row" >
            <div class="col-sm-6">
              <p> <i class="fas fa-dollar-sign"></i> &emsp; ${event.price} </p>            
              <p><i class="fas fa-map-marker"></i> &emsp; ${event.location} </p>
            </div>
            <div class="col-sm-6">
                <p> <i class="fas fa-ticket-alt"></i> &emsp; ${event.seats_remaining} Left </p>
            </div>`;

var displayOne = `<br><br><br>
    <div class="col-md-5 row col-md-offset-1">
      <div class="col-md-12" id="main-img">            
        <img src="../images/${event.id}.png" class="img-responsive" alt="Image">
      </div>
    </div>
    
    <div class="col-md-4 row event-detail">
      <h1>${event.name}</h1>
      <hr>
      <p></p><p> ${event.description} </p>               &nbsp;</p><p></p>
   
      <p><i class="fas fa-map-marker"></i> &emsp; ${event.location} </p>
      <p> <i class="fas fa-ticket-alt"></i> &emsp; ${event.seats_remaining} Left </p>

      <div class="row">
        <div class="col-md-6">
          <h3><i class="fas fa-dollar-sign"></i>  ${event.price} </h3>
        </div>
        <div class="col-md-6">
          <a class="btn btn-default btn-purchase" onClick="purchase(${event.id},buyerId,${event.price})">Buy Ticket</a>
        </div>        
      </div>

    </div>`;            /// attach buyerId in button

function init () {  
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
        web3Provider = web3.currentProvider;
    } else {
        // If no injected web3 instance is detected, fall back to Ganache
        web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(web3Provider);

    return initContracts();
};

function initContracts() {      
  var ticketFactoryAddress = "0x0b634009ef4aeedbb7d84ea9871555c834c95647";// Replace address after running npm run testrpc
  TicketFactoryContract.call = web3.eth.contract(ticketFactoryAbi).at(ticketFactoryAddress); // Replace abi.js if changed

  var ticketOwnershipAddress = "0x6ff9e53f421559fc3eb01632956d11d13c4d4be2";// Replace after running npm run testrpc
  TicketOwnershipContract.call = web3.eth.contract(ticketOwnershipAbi).at(ticketOwnershipAddress); // Replace address abi.js if changed
};

function createEvent(name, dateTime, price,location,seats,supply,admin) { // display all events
  return TicketFactory.methods.createEvent(name,dateTime,location,seats, price,supply,admin)
  .send({ from: userAccount })
  .on("receipt", function(receipt) {
    console.log("Event Created Successfully");
  })
  .on("error", function(error) {
    console.log("error" + error);
  });
}

function displayEvents(ids) { // list all events
        $("#events").empty();
        for (id of ids) {
          TicketFactory.methods.getEventDetails(id)
          .then(function(event) {
            $("#events").append(displayData);
            if(event.seats_remaining==0) {
                $("#buttonType").append(`
                    <button type="button" class="btn btn-secondary" disabled onClick="purchaseTicket(this.id)" id="${event.id}"><b>Sold Out!</b></button>
             <button type="button" class="btn btn-primary active" onClick="" id="${event.id}">Trade Tickets</button>             
             `);
            } else {
                $("#buttonType").append(`<button type="button" class="btn btn-success" onClick="purchaseTicket(this.id)" id="${event.id}">Buy Ticket</button>`);
            }
          });
        }
}

function displayOneEvent(id) { // display individual event
    $("#event").empty();
          TicketFactory.methods.getSingleEventDetails(id)
          .then(function(event) {
            $("#event").append(displayOne);
          });
}

// purchase ticket (working)
function purchase(eventId, price) { 
  let _buyer = web3.eth.accounts[0];
  console.log("buyer: " + _buyer);

  TicketFactoryContract.call.purchase
  .sendTransaction(
    1, // eventId, Change the contract
    _buyer, 
    {
      value: price, //web3.utils.toWei(price, "ether"), // TypeError: web3.utils is undefined
      from: _buyer
    },
    function (err, result){
      console.log(result)
    });

//     TicketFactory.methods.purchase(id,buyer)
// .send({ from: userAccount, value: web3js.utils.toWei(price, "ether") }) 
}

window.onload = function() {
  init();  
};