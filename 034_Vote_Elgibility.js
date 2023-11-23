age=parseInt(prompt("Enter your age :"))
if(age>65)
{
    console.log("Senior Citizen")
    console.log("Eligible for Vote")
}
else if(age<65 && age>=18)
{
    console.log("Major Citizen")
    console.log("Eligible for Vote")
}
else if(age<18)
{
    console.log("Minor Citizen")
    console.log("NOt Eligible for Vote")
}
