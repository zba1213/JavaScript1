//Write your Javascript code here
console.log("Shoppinglist")

function CreateLi(className, id, Text) 
{
   let newLi = document.createElement("li"); 

   newLi.setAttribute("id", id);

   newLi.setAttribute("class", className);

   let textNode = document.createTextNode(Text);

   newLi.appendChild(textNode);

   return newLi;
}

let myLi = CreateLi("item", 1, "Good Pizza");
document.getElementById("list").appendChild(myLi);
