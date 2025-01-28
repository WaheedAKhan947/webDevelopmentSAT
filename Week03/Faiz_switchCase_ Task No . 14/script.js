let age = prompt("Enter Your Age");

switch(true) {
    case (age <= 17 && age >= 1):
        console.log("STUDENT");
        break;
    case (age <= 25 && age >= 18):
        console.log("College STUDENT");
        break;
    default:
        console.log("WORK Professional");
}
