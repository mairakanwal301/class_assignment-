import inquirer from "inquirer";
let miles = 1.60934;
let kilometer = await inquirer.prompt([
    { name: "distance",
        type: "number",
        message: " Enter a distance in kilometer:",
    }
]);
console.log(`The distance of ${miles * kilometer.distance} kilometer is equal to ${kilometer.distance} miles.}`);
// 2ND METHOD
let miles1 = 1;
let kilometer1 = 1.60934;
let convertedDistance = miles1 * kilometer1;
console.log(convertedDistance);
