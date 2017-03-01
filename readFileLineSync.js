const readline=require("readline");
var r1=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function countLineSync(){
  r1.question("Enter File Name: ",(val)=>{
    var inputFile;
    try{
      inputFile=require("fs");
      var n=inputFile.readFileSync(val).toString().split("\n").length;
      console.log(n);
    }catch(err){
      console.log(err);
    }
    finally{
      r1.close();
    }
  })
}
countLineSync();
