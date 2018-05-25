  
TicketFactoryContract = {}
TicketOwnershipContract = {}
let owner;
let admin;

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
    var ticketFactoryAddress = "0x317e41363648a4524c62d6b7c68f9689dbffa38e";// Replace address after running npm run testrpc
    TicketFactoryContract.call = web3.eth.contract(ticketFactoryAbi).at(ticketFactoryAddress); // Replace abi.js if changed

    var ticketOwnershipAddress = "0x2bc631674c514ca4074b0e9c59e6b7bde4be6e4c";// Replace after running npm run testrpc
    TicketOwnershipContract.call = web3.eth.contract(ticketOwnershipAbi).at(ticketOwnershipAddress); // Replace address abi.js if changed
};

function createDemoEvent() {
    
    owner = web3.eth.accounts[0];
    admin = web3.eth.accounts[0];
    
    this.eventName = "Pitbull at the Avalon Ballroom, Niagara Falls CA";
    this.eventDateTime = 1527121817; 
    this.eventTicketprice = web3.toWei('0.2', 'ether');     
    this.eventLocation = "NiagaraX";
    this.eventTicketsupply = 100000;

    TicketFactoryContract.call.createEvent(
    //.sendTransaction(  
        eventName, // _name
        eventDateTime,// _dateTime
        eventTicketprice,// _price
        eventLocation,// _location
        eventTicketsupply,// _seats
        admin,// _admin
        { from: owner },
         function (err, result) {
             console.log(result)
         });
}

// purchase ticket
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
}


window.onload = function() {
  init();  
};