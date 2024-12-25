// let marks= prompt (`Enter Your Marks`)
let marks= 70

if (marks <= 100 && marks >= 80){
    console.log(`A+`);
}
 else if (marks <= 79 && marks >= 60){
    console.log(`A`);
}

else if (marks <= 59  && marks >= 40){
    console.log(`B`);
}
else if (marks <=39  && marks >= 1){
    console.log(`C`);
}
else{
    console.log(`your are FAIL`);
}