# language: en
# Attempt to test all Gherkin keywords in one Feature as a comment

Feature: Transact money at ATM

    As a Bank Owner, I want to increase my Clients interactions
    with their accounts by introducing ATMs

    Rule: Withdraw money

        Background: Setting Account transaction conditions
            Given that account has UGX "100000"
            And transaction fees of UGX "5000"
            But maintaining minimum balance of UGX "20000"

        @Withdraw @Success
        Example: Successful withdrawal
            When I withdraw UGX "50000"
            Then Account balance is "45000"

        @Withdraw @Failure
        Example: Failed withdrawal
            When I withdraw UGX "80000"
            Then Account balance is "95000"

    Rule: Deposit money

        Background: Set Account Deposit conditions
            Given that the account has UGX 50000
            And transaction fees of UGX 2500
            But Account is "unlocked"

        @Deposit  @Success
        Example: Successful deposit
            When I deposit UGX 50000
            And Account state is "unlocked"
            Then Feedback reads "Successful"

        @Deposit @Failure
        Example: Failed deposit
            When I deposit UGX 40000
            And Account state is "locked"
            Then Feedback reads "Unable to transact!"
