let names = ["name1", "name2", "name3", "name4", "name5"];

for (let index of names){
    console.log(index);
}

for (let index in names){
    console.log(index, ':', names[index]);
}

names.forEach((name) => {
    console.log('Names :',name);
});


function studentNumber(number){
    console.log('Number of students :', number);
}

studentNumber(10);

function loopStudentNumber(number) {
    for (let i = 0; i < number; i++) {
      console.log("Number of students :", number);
    }
  }
  
  loopStudentNumber(10);