var list=document.getElementById("list")

function addTodo(){
    var todo_item=document.getElementById("todo-item")

    // create li tag
    var li=document.createElement("li")
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)

    list.appendChild(li)

// create delete button
    
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("id","dltbtn")


    
// Create Edit Button

    var edBtn=document.createElement("button")
    var edText=document.createTextNode("Edit")
    edBtn.appendChild(edText)
    edBtn.setAttribute("onclick","editItem(this)")
    edBtn.setAttribute("class","btn")
    edBtn.setAttribute("id","edbtn")

    todo_item.value=""


    list.appendChild(li)
    li.appendChild(delBtn)
    li.appendChild(edBtn)
    
    // console.log(delBtn)
    // console.log(li)
}


function deleteAll(){
    list.innerHTML=""
}


function deleteItem(e){

    e.parentNode.remove()
    console.log()
}


function editItem(e){

    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter Edit value",val)
    e.parentNode.firstChild.nodeValue=editValue;

}
