const OHRToken = artifacts.require("OHRToken");

module.exports = function (deployer) {
  deployer.deploy(OHRToken, 1000);
};
