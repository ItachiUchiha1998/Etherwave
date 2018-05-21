/* Loading all imports */
const _ = require('lodash');
const expectRevert = require('./expectRevert');
const TicketOwnership = artifacts.require("./TicketOwnership.sol");
const TicketFactory = artifacts.require("./TicketFactory.sol");
const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .use(require('chai-as-promised'))
    .should();//To enable should chai style

/* Creating a class with all common Variables */
class CommonVariables {
    constructor(_accounts) {
        this.accounts = _accounts;

        this.appOwner = _accounts[0];
        this.eventAdmin = _accounts[1];
        this.buyers = _.difference(_accounts, [_accounts[0], _accounts[1]]);

        this.eventName = "Pitbull at the Avalon Ballroom, Niagara Falls CA";
        // DateTime: need to convert from Datetime and back - Date in EST timezone: 5/23/2018, 8:30:17 PM
        this.eventDateTime = 1527121817; 
        // Price: for future consideration: different ticket prices for different sections
        this.eventTicketprice = web3.toWei('0.2', 'ether');        
        this.eventTicketsupply = 100000;
    }
}

/* Exporting the module */
module.exports = {
    BigNumber,
    TicketFactory,
    TicketOwnership,
    expectRevert,
    CommonVariables
}