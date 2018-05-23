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