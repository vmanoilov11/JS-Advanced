function attachEventsListeners() {
    let daysButton = document.getElementById("daysBtn")
    daysButton.addEventListener("click", convertDays);

    function convertDays(){
        let days = document.getElementById("days").value;
        document.getElementById("hours").value = days * 24;
        document.getElementById("minutes").value = days * 24 * 60;
        document.getElementById("seconds").value = days * 24 * 60 * 60;
    }

    let hoursButton = document.getElementById("hoursBtn")
    hoursButton.addEventListener("click", convertHours);

    function convertHours(){
        let hours = document.getElementById("hours").value;
        document.getElementById("days").value = hours / 24;
        document.getElementById("minutes").value = hours * 60;
        document.getElementById("seconds").value = hours * 60 * 60;
    }

    let minButton = document.getElementById("minutesBtn")
    minButton.addEventListener("click", convertMinutes);

    function convertMinutes(){
        let minutes = document.getElementById("minutes").value;
        document.getElementById("days").value = minutes / (24 * 60);
        document.getElementById("hours").value = minutes / 60;
        document.getElementById("seconds").value = minutes * 60;
    }

    let secButton = document.getElementById("secondsBtn")
    secButton.addEventListener("click", convertSeconds);

    function convertSeconds() {
        let seconds = parseFloat(document.getElementById('seconds').value);
        document.getElementById('days').value = seconds / (24 * 60 * 60);
        document.getElementById('hours').value = seconds / (60 * 60);
        document.getElementById('minutes').value = seconds / 60;
    }
}