module.exports = {
    'search college' : function (client) {
      client
        .url('http://www.collegeview.com/')
        .waitForElementVisible('body', 1000)
        .click('a[href="/collegesearch/index.jsp"]')
        .waitForElementVisible('body',3000)
        .click('select[id="critHeader0"]')
        .waitForElementVisible('ui-picklist-options',2000)
        .click('select[class="ui-picklist-option-text"] option[value="Ohio"]')
        .pause(1000)
        .assert.containsText('ol#rso li:first-child',
          'Rembrandt - Wikipedia')
        .end();
    }
  };