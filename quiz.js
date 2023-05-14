
let skyColour;
let tryAgain;

do {

  skyColour = prompt("What colour is the sky? \n a. Purple \n b. Pink \n c. Blue \n d. Yellow ");
  if (skyColour != "c") {
    tryAgain = prompt("That’s incorrect! Would you like to try again? y/n: "); 
  }
  else {
    console.log("That’s correct!");
    break
  }

} while (tryAgain == "y");

console.log("Done");
