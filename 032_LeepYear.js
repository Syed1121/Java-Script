year=parseInt(prompt("Enter Year :"))
if(year%400==0 && year%100!=0 || year%4==0)
{
    console.log("Leep Year")
}
else
{
    console.log("Not a Leep Year")
}
