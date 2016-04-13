var amazonCommands = {
  search: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@searchButton', 1000)
      .click('@searchButton');
  }
};

module.exports = {
  url: 'http://amazon.com',
  commands: [amazonCommands],
  elements: {
    searchBar: 'input[id=twotabsearchtextbox]',
    searchButton: 'input[class=nav-input]',
  }
};
