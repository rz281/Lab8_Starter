# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Within a Github action that runs whenever code is pushed. We would want to make sure code quality/functionality still behaves as it should
only checking at the very end would not benefit us if our code hasn't been working since long ago and we just found out, and having it automatically run after every code push would save time versus somebody having to manually run these tests

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No, unit testing would probably be the better option here as an end to end test should be checking the 'bigger picture' instead of only one function

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, unit testing would not be suitable because the message feature requires interaction between one user and another, the feature would require multiple components to work correctly thus is unsuitable for unit testing, which should only test one component.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, there shouldn't be any other components, or difficult ones at the very least, involved in checking the value of the message length here. There is no big interaction with other components that should be necessary, so unit testing is appropriate here.