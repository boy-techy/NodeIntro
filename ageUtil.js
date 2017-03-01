var util=require('./ageCalculator.js');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("Enter Date of Birth in YYYY/MM/DD format: ",(dob)=>{
    util.ageCalc(dob);
    r1.close();
})
