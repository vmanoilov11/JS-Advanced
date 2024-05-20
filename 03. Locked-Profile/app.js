function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach((btn) => 
        btn.addEventListener("click", ToggleProfiles));

    function ToggleProfiles(e){
    let profile = e.target.parentElement;
    isUnlocked = profile.querySelector(`input[type="radio"][value="unlock"]`).checked;

    if(isUnlocked){
        let div = profile.querySelector("div");
        if(e.target.textContent == "Show more"){
            div.style.display = "block"
            e.target.textContent = "Hide it";

        }else{
            div.style.display = "";
            e.target.textContent = "Show more"

        }
    }

    }

}
