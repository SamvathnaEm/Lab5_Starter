# Lab 5 - Starter
Samvathna Em - saem@ucsd.edu

Kaustubh Paliwal - kpaliwal@ucsd.edu

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
No, I might not use a unit test to test the “message” feature of a messaging application. While unit tests are great for testing individual units of code in isolation, the “message” feature involves multiple components interacting with each other (e.g., user interface, database, network etc.). It might be more appropriate to use integration tests or end-to-end tests for this feature to ensure that all components work together as expected.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test to test the “max message length” feature of a messaging application. This feature is a good candidate for unit testing because it involves a single, isolated functionality that can be tested independently of other parts of the application. We can easily write a test that attempts to input a message longer than the maximum length and assert that the application prevents this. This helps ensure that the “max message length” feature is working as intended.
