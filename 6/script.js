var company= new Object();
company.name="facebook";
company.ceo= new Object();
company.ceo.fname="Mark";
company.ceo.lname="Zucerberg";
company.ceo.favColor="blue";



console.log(company);
console.log("company ceo name is: "+company.ceo.fname);

console.log(company["name"]);
var stockpropname= "stock of company"
company[stockpropname]=100;
console.log("stock price is: "+company[stockpropname]);
