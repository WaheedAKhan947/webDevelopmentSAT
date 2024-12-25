

// let day= prompt("please enter your day in 1 to 7")
// switch (day){
//     case 1:
//     console.log("Monday")
//     break;
//     case 2:
//         console.log("Teusday");
//     break;
//     case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//             console.log("Thursday");
//             break;
//                 case 5:
//                     console.log("Friday");
//                     break
//                     case 6:
//                         console.log("Saturday");
//                         break
//                         case 7:
//                             console.log("Sunday");
//                             break;
//                             default:
//                                 console.log("You enter invelid number")
// }



// let marks=Number(prompt("please enter your marks from 0 to 100"));
// switch (true){
//     case (marks>=90):
//         console.log("your grade is : A+")
//         break;
//         case (marks>=80):
//             console.log("your grade is : A")
//             break;
//             case (marks>=70):
//                 console.log("your grade is : B");
//                 break;
//                 case marks>=60:
//                     console.log("your grade is : C")
//                     break;
//                     case (marks>=50):
//                         console.log("your grade is : D")
//                         break;
//                         default:
//                             console.log("you are fail")                     
// }





// let number=Number(prompt("Enter number"));
// number=Number(number);
// switch (true){
//     case (number%2===0):
//         console.log("Number is even :")
//         break;
//         case(number%2===1):
//         console.log("Number is odd")
//         break;
//         default:
//             console.log("You entered invelid number");
// }



let age=Number(prompt("Please enter your age."));
switch(true){
    case (age<18):
        console.log("You are not eligible for licence.");
        break;
        case (age>=18 && age<60):
            console.log("You are eligible for licence.");
            break;
            default:
                console.log("Sorry you are overage.")
}