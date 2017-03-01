const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readAsync() {
    r1.question("Enter File Name: ", (val) => {
        var inputFile;
        try {
            inputFile = require("fs");
            inputFile.readFile(val,function(err, buf) {
                console.log("Number of Lines in file are: "+(buf.toString().split("\n")).length);
            })
        } catch (err) {
            console.log(err);
        } finally {
            r1.close();
        }
    });

}
readAsync();
