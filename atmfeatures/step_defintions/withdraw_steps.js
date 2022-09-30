// eslint-disable-next-line import/no-extraneous-dependencies
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('that account has UGX {string}', function (initialBalance) {
  this.balance = initialBalance;
});

Given('transaction fees of UGX {string}', function (fees) {
  this.fee = fees;
});

Given('maintaining minimum balance of UGX {string}', function (minBal) {
  this.minimum = minBal;
});

When('I withdraw UGX {string}', function (withdrawAmount) {
  this.withdrawAmt = withdrawAmount;
  this.expectedBalance =
    parseInt(this.balance, 10) -
    (parseInt(withdrawAmount, 10) + parseInt(this.fee, 10));
});

Then('Account balance is {string}', function (acctBalance) {
  assert.equal(this.expectedBalance, acctBalance);
});

Then('Account balance is not {string}', function (acctBalance) {
  assert.notEqual(this.expectedBalance, acctBalance);
});
