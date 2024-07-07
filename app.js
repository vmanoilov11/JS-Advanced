window.addEventListener("load", solve);

function solve(){
    let addBtn = document.getElementById("add-btn");
    let tasks = document.getElementById("task-list");
    let doneTasks = document.getElementById("done-list");

    addBtn.addEventListener("click", add);

    function add(e){
        e.preventDefault();
        let place = document.getElementById("place").value
        let action = document.getElementById("action").value
        let person = document.getElementById("person").value

        if(place == "" || action == "" || person == ""){
            return
        }
        let li = document.createElement("li");
        li.innerHTML = `<li class="clean-task">
            <article>
                <p>Place:${place}</p>
                <p>Action:${action}</p>
                <p>Person:${person}</p>
            </article>
                <div class="buttons">
                    <button class="edit">Edit</button>
                    <button class="done">Done</button>
                </div>
        </li>`
        tasks.appendChild(li)

        document.getElementById("place").value = ""
        document.getElementById("action").value = ""
        document.getElementById("person").value = ""


        document.querySelector(".edit").addEventListener("click", edit);
        document.querySelector(".done").addEventListener("click", done);
        function edit(e){
        document.getElementById("place").value = place;
        document.getElementById("action").value = action;
        document.getElementById("person").value = person;

        tasks.removeChild(li)
        }

        function done(e){
            tasks.removeChild(li)

            let newLi = document.createElement("li");
            newLi.innerHTML = `<li>
            <article>
                <p>Place:${place}</p>
                <p>Action:${action}</p>
                <p>Person:${person}</p>
            </article>
                <button class="delete">Delete</button>
            </li>`

            doneTasks.appendChild(newLi);

            document.querySelector(".delete").addEventListener("click", deleteFunc);

            function deleteFunc(e){
                let li = this.closest("li");
                doneTasks.removeChild(li);

            }

        }





    }
}

//TODO...