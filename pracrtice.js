var parent = document.getElementById("parent")


function addNote() {
    var input = document.getElementById("input")

    // validation lagao min 5 char
    if (input.value.length < 5) {
        alert("Invalid Note")
        return
    }


    var cardUI = `<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${input.value}  </h5>
                <button class="btn btn-info"onclick="editTodo(this)">Edit</button>
                <button class="btn btn-danger"onclick="deleteNote(this)">Delete</button>
            </div>
        </div>`


    // console.log(cardUI)
    parent.innerHTML += cardUI

    input.value = ""
}


function deleteNote(deleteBtn) {
    // console.log("deleteNote()" , deleteBtn.parentNode.parentNode)
    deleteBtn.parentNode.parentNode.remove()
}


function editTodo(editBtn) {
    console.log("editTOdo", editBtn.previousElementSibling)
    var editValue = prompt("Enter edit value" , editBtn.previousElementSibling.innerHTML )
    editBtn.previousElementSibling.innerHTML = editValue
}


function deleteAll(){
    parent.innerHTML = ""
}