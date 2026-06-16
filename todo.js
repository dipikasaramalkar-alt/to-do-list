let button = document.getElementById("addbtn");
let inputfield = document.getElementById("inputefield");
let listcontainer = document.getElementById("listcontainer");

button.addEventListener("click",function()
{
    if(inputfield.value.trim() === ""){
        alert("Please enter a task");
    }else
    {
        let li=document.createElement('li');
        li.innerHTML=inputfield.value;
        listcontainer.appendChild(li);
    }
});