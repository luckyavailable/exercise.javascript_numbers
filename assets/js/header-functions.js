function testCompute(expectedOutput, numberOfStars) {
    console.log("\n");
    console.log("Test Compute Expression  "+ numberOfStars);
    console.log("ExpectedOutput   "+ expectedOutput);
    var v=compute(numberOfStars);
    console.log("Actual output   "+v);

    if(v==expectedOutput){
     console.log("Test Pass");
    }else {
     console.log("Test Fail");
    }
}




