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
                <p><i class="fas fa-calendar-alt"></i> &emsp; ${event.dateTime.toISOString().substring(0, 10)} </p>
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
      <p><i class="fas fa-calendar-alt"></i> &emsp; ${event.dateTime.toISOString().substring(0, 10)}  </p>
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
    var myContractAddress = "YOUR_CONTRACT_ADDRESS";
    var myContract = new web3js.eth.Contract(myABI, myContractAddress);

    return initContracts();
};


function initContracts() {
    $.getJSON('build/contracts/TicketFactory.json', function(data) {
        var TicketFactoryArtifact = data;
        var TicketFactoryContract = TruffleContract(TicketFactoryArtifact);
        
        TicketFactoryContract.setProvider(web3Provider); 
         
        console.log("TicketFactoryContract:")
        console.log(TicketFactoryContract)

        contracts.TicketFactoryContract = TicketFactoryContract.deployed();
    });
    $.getJSON('build/contracts/TicketOwnership.json', function (data) {
        var TicketOwnershipArtifact = data;
        var TicketOwnershipContract = TruffleContract(TicketOwnershipArtifact);

        TicketOwnershipContract.setProvider(web3Provider);

        console.log("TicketOwnershipContract:")
        console.log(TicketOwnershipContract)

        contracts.Transcripts = TicketOwnershipContract.deployed(); 
    });   
};

function createEvent(name, dateTime, price,location,seats,supply,admin) { // display all events
  return TicketFactory.methods.createEvent(name,dateTime,location,seats, price,supply,admin)
  .send({ from: userAccount })
  .on("receipt", function(receipt) {
    console.log("Event Created Successfully");
  })
  .on("error", function(error) {
    console.log("error" : error);
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

function purchase(id,buyer,price) { // purchase ticket
    TicketFactory.methods.purchase(id,buyer)
.send({ from: userAccount, value: web3js.utils.toWei(price, "ether") }) 
}
