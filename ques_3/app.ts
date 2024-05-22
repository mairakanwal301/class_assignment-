import inquirer from "inquirer";
let answersName = await inquirer.prompt(
    [
        { name:"name",
        type:"input",
        message: "Enter a name:",

        },
    ]
);
   
  let {name}= answersName;
  
 
 switch (name) {
    case "zarah khan":
        console.log("zarah khan is known friend, Hello! how are you zarah !  ")
        
        break;
        case "ali":
        console.log("ali is known friend, hello ali! how are you ! ")
    break;
    
    default: 
    console.log("unknown friend");
        break;
 }