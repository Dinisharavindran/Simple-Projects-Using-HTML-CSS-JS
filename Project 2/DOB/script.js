document.querySelector("#submit").addEventListener("click", function () {
    const dob = document.querySelector("#dob").value;
    const time = document.querySelector("#time").value;
    if (!dob || !time) {
        alert("Please provide both date and time of birth.");
        return;
    }

    const birthDate = new Date(`${dob}T${time}`);
    const now = new Date();

    if (birthDate > now) {
        alert("Birth date and time cannot be in the future.");
        return;
    }

    const diff = now - birthDate;

    const sec = Math.floor(diff / 1000);
    const min = Math.floor(diff / (1000 * 60));
    const hour = Math.floor(diff / (1000 * 60 * 60));
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const week = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375));
    const year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    
    const results = document.querySelector("#results");
    results.style.display = "block";
    document.querySelector("#year").textContent = year;
    document.querySelector("#month").textContent = month;
    document.querySelector("#week").textContent = week;
    document.querySelector("#day").textContent = day;
    document.querySelector("#hour").textContent = hour;
    document.querySelector("#min").textContent = min;
    document.querySelector("#sec").textContent = sec;
});
