document.addEventListener("DOMContentLoaded", function () {
    let navPath = window.location.pathname.includes("/pages/") ? "../nav.html" : "nav.html";

    fetch(navPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading the navbar:", error));
});

