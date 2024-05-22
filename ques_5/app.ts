let num1 : number =  10;
let num2 : number = 5 ;
let operator = "-";
function result(num1 :number , num2 :number, operators: string){
  
  return operator === "-"  ? num1 - num2 : num1 / num2 
}
console.log(`Result of ${num1} ${operator} ${num2} is:` ,result(num1,num2,operator));
 
 operator = "/" ;
console.log(`Result of updated operator ${num1} ${operator} ${num2} is:`, result(num1,num2,operator));


