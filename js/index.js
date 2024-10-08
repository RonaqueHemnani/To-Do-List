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

var ul = document.createElement("ul");
main.appendChild(ul);

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
        paragraph.innerHTML = "Success!";
        paragraph.style.color = "green";
        setTimeout(function() {
        paragraph.style.display ="none";
        }, 1000);

        var li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        li.setAttribute("id", input.value);

        var div = document.createElement("div");
        li.appendChild(div);

        var editbtn =document.createElement("button");
        editbtn.setAttribute("class", "editbtn");
        div.appendChild(editbtn);

        var btn = document.createElement("img");
        btn.setAttribute("src", "https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/edit-247.png");
        btn.setAttribute("class", "btn");
        editbtn.appendChild(btn);

        var deletebtn =document.createElement("button");
        deletebtn.setAttribute("class", "deletebtn");
        div.appendChild(deletebtn);

        var btn = document.createElement("img");
        btn.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/6861/6861362.png");
        btn.setAttribute("class", "btn");
        deletebtn.appendChild(btn);        

        editbtn.addEventListener("click", function() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Edit it!",
                cancelButtonText: "No, Edit!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                var valueupd = prompt("Update-ToDoList" ,li.id);
                li.innerHTML = valueupd;
                li.id = valueupd;
                li.appendChild(div);
                div.appendChild(editbtn);
                div.appendChild(deletebtn);
                  swalWithBootstrapButtons.fire({
                    title: "Edit!",
                    text: "Your file has been Edit.",
                    icon: "success"
                  });
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                  });
                }
              });
        });
        deletebtn.addEventListener("click", function() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                    li.remove();
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                  });
                }
            });
        });
        input.value = "";
    }
}