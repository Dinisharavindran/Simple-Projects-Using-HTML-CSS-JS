document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const query = event.target.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

document.querySelectorAll(".btn")[0].addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

document.querySelectorAll(".btn")[1].addEventListener("click", function () {
    window.location.href = "https://www.google.com/doodles";
});
