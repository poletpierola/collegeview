module.exports = {
    'search college' : function (client) {
      client
        .url('http://www.collegeview.com/')
        .waitForElementVisible('body', 1000)
        .click('a[href="/collegesearch/index.jsp"]')
        .waitForElementVisible('body',1000)
        .click('#critHeader0')
        .click('option[value=Ohio]')
        .click('#critHeader1')
        .click('input[type=radio]', 'degreeTypeRadio0')
        .setValue('input[type=text]', 'Computer Software Engineering')
        .end();
    }
  };