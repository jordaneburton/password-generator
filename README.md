# Password-Generator
Generates a random password after defining some criteria

## Description

For this project, I had to add code to a given Javascript file in order to create a random password. I first prompt the user and ask them how long they would like their password to be. After validating their input, I then show them four different criteria I can use to create the password; by using Numeric, Lowercase, Uppercase, and/or Special characters. After individually agreeing to use or not use each set, I make sure at least one criteria set is allowed and I generate a random password under the given criteria.

When asking for the password length, I do check to make sure the given length is between 8 and 128. I also check whether the input is actually a number; if these checks are not met, then I cancel the password creation process and return out of my function early.

Once they've given me a valid password length, I ask them which criteria they would like to apply to their password. There are four criteria you can use to create your password, however you need to accept at least one of the criteria or else the program will cancel the password creation process. Once at least one criteria is selected, the program begins creating a random password. 

In order to generate a password, I create an array of numbers from 32 to 126. These numbers correspond to the unicodes of the standard characters in UTF-8. I use a function called "createCriteriaArray" that takes in arguments for each of the four character types. Using the accepted character types, I include certain ranges of numbers into the array and I return the array to use for creating a random password. Once I have my array of accepted characters, the program picks random characters using the Math.random method until it creates a string of the desired password length, which is then outputted to the screen for the user to copy and store in their password bank.

Here is a link to the deployed project: [https://jordaneburton.github.io/password-generator/]

### Dependencies

* An up-to-date browser

## Authors

Jordan Burton 
[@jordaneburton](https://github.com/jordaneburton)
