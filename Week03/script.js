let age= prompt("Enter your age : ")
age=Number(age);

if(age<20)
    {
    console.log("you are not eligible for licence ")
}
else if(age>=20 && age<60)
    {
    console.log("you are eligible for licence")
}
else{
    console.log("You are a senior citizen and eligible to licence.")
}