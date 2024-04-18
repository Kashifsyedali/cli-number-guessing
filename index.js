import inquirer from "inquirer";
let loop = true;
while (loop) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuessNumber",
            type: "number",
            message: "Please Choose a Number",
        },
    ]);
    if (answer.userGuessNumber === randomNumber) {
        console.log("Conguratulation \n YOU WINN");
    }
    else {
        console.log("Please Try Again");
    }
    const morePlay = await inquirer.prompt([
        {
            message: "Do You Want Play More",
            type: "confirm",
            name: "More",
            default: false,
        },
    ]);
    if (!morePlay.More) {
        loop = false;
        console.log("Thank You");
    }
}
