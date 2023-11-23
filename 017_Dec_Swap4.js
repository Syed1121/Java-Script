a=parseInt(prompt("Enter A value:"))
b=parseInt(prompt("Enter B value:"))
console.log("Values before Swap A=",a," B=",b)
a=a^b
b=a^b
a=a^b
console.log("Values After Swap A=",a," B=",b)