/* Loading all libraries from common */
const {
  TicketFactory, //Ticket Factor Contract
  TicketOwnership, //Ticket Ownership Contract
    BigNumber, //BigNumber from web3 (for ease to use)
    CommonVariables, //Multiple common variables
    expectRevert, //Check if the Solidity returns "revert" exception (usually result from require failed)
  } = require('./helpers/common');
  
  
  contract('TicketFactory', _accounts => {
    /* Initialization code here */
    const commonVars = new CommonVariables(_accounts);
  
    let accounts = commonVars.accounts;
  
    const _appOwner = commonVars.appOwner;
    
    const _eventName = commonVars.eventName;
    const _eventDateTime = commonVars.eventDateTime;
    const _eventTicketprice = commonVars.eventTicketprice;
    const _eventTicketsupply = commonVars.eventTicketsupply;
    const _eventAdmin = commonVars.eventAdmin;
    const _buyers = commonVars.buyers;

    let ticketFactory = null;
  
    beforeEach(async () => {
      ticketFactory = await TicketFactory.new({ from: _appOwner });
    });
  
    describe('Event Test Cases', () => {

      // ## Create Event
      it(`1. Given that I’m the Owner
          2. When I try to create a new Event and I included the name, date, price and supply
          3. Then I should be able to get the created event id`, () => {
        return ticketFactory.createEvent.call(
          _eventName, 
          _eventDateTime, 
          _eventTicketprice,
          _eventTicketsupply,
          _eventAdmin,
          { from: _appOwner }
        ).then((result) => {
          return result;
        }).should.eventually.be.bignumber.equals(0);
      });           

      // ## Update Event
      it(`1. Given that I’m the Event Admin
        2. When I try to update a Event ticket price and I included the event id and price
        3. Then I should be able to get the new ticket price`, () => {          

      });

    });  

    describe('Ticket Test Cases', () => {

      // ## Purchase Ticket
      it(`1. Given that I’m the Buyer
          2. When I try to purchase a Ticket and I included the value and event Id
          3. Then I should be able to get the ticket id`, () => {
          
      });

    });  
  
  });