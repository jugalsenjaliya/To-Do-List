let addtodobutton = document.getElementById('addtodo');
let complete = document.getElementById('comp');
let todocontainer = document.getElementById('todocontainer');
let mypara = document.getElementById('mylist');
let intputfield = document.getElementById('inputfield');

addtodobutton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = intputfield.value;
    todocontainer.appendChild(paragraph);
    intputfield.value = "";
    var node = document.createElement("P");
    paragraph.addEventListener('click', function(){
        // var textnode = document.createTextNode(paragraph.value);
        node.appendChild(paragraph);
        document.getElementById("myList").appendChild(node);
        node.classList.add('paragraph-styling')
        // paragraph.style.textDecoration = "line-through";
    })
    node.addEventListener('dblclick', function(){
        // mylist.removeChild(node);
        node.style.display = "none";
    })
})

function reset(){
    window.location.reload();
}