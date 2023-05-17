'use strict';

// Ask the user to enter his/her name 
var userName = prompt("Please enter your name: ");

// Ask the user to enter his/her gender (male or female).
var gender = prompt("Please enter your gender (male or female): ");

// Ask the user to enter his/her age
var age =prompt("Please enter your age: ");

// Check if the age is less than or equal zero
if(age <= 0){
    alert("Invalid age. Age must be greater than zero.");
}else{
// Ask the user to confirm if he/she wants to skip the welcoming message.
    var skip = confirm("Do you want to skip welcoming massege ?");
}

// Check if the gender is male or female
if (skip) {
    alert("You are skip the welcoming massege");
  } else {
    if (gender === "male") {
      alert("Welcome Mr." + userName);
    } else if (gender === "female") {
      alert("Welcome Ms." + userName);
    } else {
      alert("Welcome " + userName);
    }
  }

//   this is the three Questions I want to ask user
  var questions = [
    "Do you like Dounts ?",
    "Do you like stuffed Dounts ?",
    "Do you like Lotus Dounts ?"
  ];

//   this is array to store answers for the above questions
var answers = [];

var i;

// this function to prompt the answers from user and push it to the answers array
function promptAnswers(questions){
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
     
        if(answer == "") {
            alert("invalid");
        } 

        // add question answer to the answers array
        answers.push(answer);
    }
}

// call function
promptAnswers(questions);

// this function to print array items on console
function printAnswers(answers){

    console.log("Answers =>");

    for (var i = 0; i < answers.length; i++) {
        
        console.log(answers[i]);
    }
    
}

//call function
printAnswers(answers);