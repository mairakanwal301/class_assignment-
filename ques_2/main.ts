import inquirer from "inquirer";
import chalk from "chalk";
let number = await inquirer.prompt(
    [
        {
            name: "userNumber",
            type: "number",
            message: " Enter a number:",

        }
    ]
);
let dynamicNumber = 30 ;
if(number.userNumber === dynamicNumber){
    console.log(chalk.green("congrats! The entered number is equal to the dynamic number."));
}else if(number.userNumber > dynamicNumber){
    console.log(chalk.yellow(" The entered number is greater than the dynamic number.")) ;
}else if(number.userNumber < dynamicNumber){
    console.log(chalk.blue(" The entered number is less than the dynamic number.")) ;
}else {}