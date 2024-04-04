let StdName = prompt("Enter Your Name");
let urdu = +prompt("Enter Urdu Marks")
let english = +prompt("Enter English Marks")
let maths= +prompt("Enter Maths Marks")
let chem= +prompt("Enter Chem Marks")
let phy= +prompt("Enter Physics Marks")
let Total = urdu + english + maths + chem + phy;
let percentage = (Total/500) * 100;
if(percentage >= 90 && percentage <=100){
document.write(StdName + " Your percentage is " + percentage + "%" + "and your grade is" + "A+")
}elseif(percentage >= 80 && percentage <=90){
 document.write(StdName + "Your percentage is"+percentage+"%" +"and your grade is" + "Aone")
}
elseif(percentage >= 70 && percentage <=80){
    document.write(StdName + "Your percentage is"+percentage+"%" +"and your grade is" + "A")
}
elseif(percentage >= 60 && percentage <=70){
    document.write(StdName + "Your percentage is"+percentage+"%" +"and your grade is" + "B")
}
elseif(percentage >= 50 && percentage <=60){
    document.write(StdName + "Your percentage is"+percentage+"%" +"and your grade is" + "C")
}
elseif((percentage >= 40 && percentage <=50){
    document.write(StdName + "Your percentage is" + percentage + "%" + "and your grade is" + "Fail")
}
)
else{
    document.write("Invalid")
}

