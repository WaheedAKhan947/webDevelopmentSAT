let age= prompt("enter your age");
age=Number(age);
if(age<18){
    console.log("you are not eligible for licence ")

}else if(age>=18 && age<60){
    console.log("you are eligible for licence")
}else{
    console.log("You are a senior citizen and eligible to vote.")
}