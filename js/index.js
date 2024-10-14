var main = document.getElementById("main");
var div = document.createElement("div");
div.setAttribute("id", "heading");
main.appendChild(div);

var tag = document.createElement("h1");
tag.innerHTML = "TO DO List";
div.appendChild(tag);

var inner = document.createElement("div");
inner.setAttribute("class","inner");
main.appendChild(inner);

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter a task");
input.setAttribute("class", "input");
inner.appendChild(input);

var paragraph = document.createElement("p");
paragraph.setAttribute("class", "paragraph");
main.appendChild(paragraph);

var btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.setAttribute("onclick", "AddTask()");
inner.appendChild(btn);

var img = document.createElement("img");
img.setAttribute("src", "https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png");
img.setAttribute("class", "img");
btn.appendChild(img);

var showbtn =document.createElement("button");
showbtn.setAttribute("class", "showbtn");
showbtn.setAttribute("onclick", "seentodolist()");
inner.appendChild(showbtn);

var showimg = document.createElement("img");
showimg.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/141/141947.png");
showimg.setAttribute("class", "showimg");
showbtn.appendChild(showimg);

var ul = document.createElement("ul");
main.appendChild(ul);

var tag =document.createElement("hr");
main.appendChild(tag);

var todolist = [];
var todoHistory = [];

function AddTask(){
    paragraph.style.display ="block";
    if(input.value === ""){
    paragraph.innerHTML = "Enter a task required!";
    input.focus();
    paragraph.style.color = "red";
    setTimeout( function () {
        paragraph.style.display ="none";
    }, 1000);
    } else{
      todolist.push(input.value);
        paragraph.innerHTML = "Success!";
        paragraph.style.color = "green";
        setTimeout(function() {
        paragraph.style.display ="none";
        }, 1000);
        input.value = "";
    }
}

function seentodolist(){
  ul.innerHTML = "";
  if(todolist.length === 0){
    alert("fill the to do list!");
  } else{
    for(var i = 0; i < todolist.length; i++){
      var li = document.createElement("li");
      li.innerHTML = todolist[i];
      ul.appendChild(li);

      var div = document.createElement("div");
      li.appendChild(div);

      var editbtn =document.createElement("button");
      editbtn.setAttribute("class", "editbtn");
      editbtn.setAttribute("onclick", `editlist(${i})`);
      div.appendChild(editbtn);

      var btn = document.createElement("img");
      btn.setAttribute("src", "https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/edit-247.png");
      btn.setAttribute("class", "btn");
      editbtn.appendChild(btn);

      var deletebtn =document.createElement("button");
      deletebtn.setAttribute("class", "deletebtn");
      deletebtn.setAttribute("onclick", `deletelist(${i})`);
      div.appendChild(deletebtn);

      var btn = document.createElement("img");
      btn.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/6861/6861362.png");
      btn.setAttribute("class", "btn");
      deletebtn.appendChild(btn);
    }
  }
}

function editlist(i){
  var UpdateTodoList = prompt("update Todo", todolist[i]);
  todolist[i] = UpdateTodoList;
  seentodolist();
}

function deletelist(i){
  todoHistory.push(todolist[i]);
  checkhistory(i);
  todolist.splice(i, 1);
  seentodolist();
}

var order = document.createElement("ul");
main.appendChild(order);

function checkhistory(i){
  var list = document.createElement("li");
  list.innerHTML = todolist[i];
  order.appendChild(list);
}