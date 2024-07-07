window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById("add-btn");
    let checkList = document.getElementById('check-list');
    addBtn.addEventListener("click", add);
    let upcomingList = document.getElementById("upcoming-list");
    let finishedList = document.getElementById("finished-list" )


    function add(e) {
        e.preventDefault();

        let time = document.getElementById("time").value;
        let date = document.getElementById("date").value;
        let place = document.getElementById("place").value;
        let event = document.getElementById("event-name").value;
        let email = document.getElementById("email").value;

        if (time === "" || date === "" || place === "" || event === "" || email === "") {
            return;
        }

        let li = document.createElement("li");
        li.innerHTML = `<li class="event-content">
            <article>
                <p>Begins: ${date} at: ${time}</p>
                <p>In: ${place}</p>
                <p>Event:  ${event}</p>
                <p>Contact: ${email}</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        </li>`;

        checkList.appendChild(li);

        document.getElementById("time").value = ""
        document.getElementById("date").value = ""
        document.getElementById("place").value= ""
        document.getElementById("event-name").value= ""
        document.getElementById("email").value= ""
        document.getElementById("add-btn").disabled = true;

        li.querySelector(".edit-btn").addEventListener("click", edit);
        li.querySelector(".continue-btn").addEventListener("click", continueFunc);


    function edit(){
        document.getElementById("time").value = time
        document.getElementById("date").value = date
        document.getElementById("place").value= place
        document.getElementById("event-name").value= event 
        document.getElementById("email").value= email


    checkList.remove(li)
    document.getElementById("add-btn").disabled = false;
        

    }
    function continueFunc(){
        let li = document.createElement("li");
            li.innerHTML = `<li class="event-content">
                <article>
                    <p>Begins: ${date} at: ${time}</p>
                    <p>In: ${place}</p>
                    <p>Event:  ${event}</p>
                    <p>Contact: ${email}</p>
                </article>
                <button class="finished-btn">Move to Finished</button>
            </li>`;
            upcomingList.appendChild(li);

        checkList.remove(li)
        addBtn.disabled = false;
        document.querySelector(".finished-btn").addEventListener("click", finish)

        function finish(e){
            let li = document.createElement("li")
            li.innerHTML = `<li class="event-content">
            <article>
                <p>Begins: ${date} at: ${time}</p>
                <p>In: ${place}</p>
                <p>Event:  ${event}</p>
                <p>Contact: ${email}</p>
            </article>
        </li>`
            finishedList.appendChild(li)
            upcomingList.remove(li)

            const cancelBtn = document.getElementById('clear')
            cancelBtn.addEventListener('click',clear);

            function clear(){
                finishedList.remove()
                addBtn.disabled = false;
            }

        }



    }

    }
}
