sno=parseInt(prompt("Enter Student Number :"))
sname=prompt("Enter Student Name :")
sclass=parseInt(prompt("Enter Student Class :"))
ssec=prompt("Enter Student Section :")
m1=parseInt(prompt("Enter M1 :"))
m2=parseInt(prompt("Enter M2 :"))
m3=parseInt(prompt("Enter M3 :"))
m4=parseInt(prompt("Enter M4 :"))
m5=parseInt(prompt("Enter M5 :"))
m6=parseInt(prompt("Enter M6 :"))
tot=m1+m2+m3+m4+m5+m6
av=tot/6
console.log("-----------------------------------------")
console.log("   Student Marks Memo")
console.log("-----------------------------------------")
console.log("sno=",sno," ","sname=",sname)
console.log("sclass=",sclass," ","ssec=",ssec)
console.log("m1=",m1," ","m2=",m2," ","m3=",m3)
console.log("m4=",m4," ","m5=",m5," ","m6=",m6)
console.log("-----------------------------------------")
console.log("Total=",tot)
console.log("Average",av)
console.log("-----------------------------------------")
if(m1<35 || m2<35 || m3<35 || m4<35 || m5<35 || m6<35)
{
    console.log("Result=Fail")
    console.log("Grade=**********")
}
else if(av>=65)
{
  console.log("Result=Pass")
    console.log("Grade=A")  
}
else if(av<65 && av>=45)
{
  console.log("Result=Pass")
    console.log("Grade=B")  
}
else if(av<45 && av>=35)
{
  console.log("Result=Pass")
    console.log("Grade=c")  
}
