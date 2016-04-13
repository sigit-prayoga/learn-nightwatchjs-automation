// will be my test using nightwatch here
module.exports = {
  // 'Demo test IMDB' : function (browser) {
  //   browser
  //     .url('http://www.imdb.com')
  //     .waitForElementVisible('body', 1000)
  //     .setValue('input[id=navbar-query]', 'spotlight')
  //     .waitForElementVisible('button[id=navbar-submit-button]', 1000)
  //     .click('button[id=navbar-submit-button]')
  //     .pause(1000)
  //     .assert.containsText('span[class=findSearchTerm]', 'spotlight')
  //     .end();
  // }

  'Amazon Test' : function(client){
    var amazon = client.page.amazon();
    amazon.navigate()
      .assert.title('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
      .assert.visible('@searchBar')
      .assert.visible('@searchButton')
      .setValue('@searchBar', 'iphone se')
      .search();

    client.end();
  }

};
