const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
btnCreateList.addEventListener("click",function(){
let list=document.createElement("div");
let text=document.createElement("h2");
let listName = document.getElementById("list-name").value;
let photo=document.createElement("img");

photo.setAttribute("src","img/paint.jpg");
photo.setAttribute("alt","Редактирование");
photo.setAttribute("width","30px");

text.append(listName);

list.classList.add("list");
list.append(text);
list.append(photo);
desk.append(list);
})	

const clear = document.getElementsById("clear")
clear.onclick = function() {
	desk = "";
}
