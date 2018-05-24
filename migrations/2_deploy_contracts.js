var TicketOwnership = artifacts.require("./TicketOwnership.sol");
var TicketFactory = artifacts.require("./TicketFactory.sol");

module.exports = function(deployer) {
    deployer.deploy(TicketOwnership);
    deployer.deploy(TicketFactory);

    return deployer;
};