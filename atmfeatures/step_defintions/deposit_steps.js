// eslint-disable-next-line import/no-extraneous-dependencies
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('that the account has UGX {int}', function (initialBalance) {
  this.balance = initialBalance;
});

Given('transaction fees of UGX {int}', function (fees) {
  this.fee = fees;
});

Given('Account is {string}', function (accountStatus) {
  this.status = accountStatus;
});

When('I deposit UGX {int}', function (deposit) {
  this.deposit = deposit;
});

When('Account state is {string}', function (accountStatus) {
  this.accountStatus = accountStatus;
  this.accountStatus = 'unlocked';
});

Then('Feedback reads {string}', function (transactionStatus) {
  this.transactionStatus = transactionStatus;
  assert.equal(this.transactionStatus, transactionStatus);
});
