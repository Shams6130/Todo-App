let inp=document.querySelector("input");
let btn=document.querySelector("#btn");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
    item.innerText=inp.value;
    ul.appendChild(item);
    item.appendChild(del);
    inp.value="";

});
    ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});