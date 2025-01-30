document.addEventListener("DOMContentLoaded", function () {
    let navPath = window.location.pathname.includes("/pages/") ? "../nav.html" : "nav.html";

    fetch(navPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Ensure links are properly set after insertion
            updateNavLinks();
        })
        .catch(error => console.error("Error loading the navbar:", error));
});

function updateNavLinks() {
    document.querySelectorAll("#navbar a").forEach(link => {
        let href = link.getAttribute("href");

        // If the page is inside /pages/, adjust the paths
        if (window.location.pathname.includes("/pages/")) {
            if (!href.startsWith("http")) {
                link.setAttribute("href", "../" + href);
            }
        }
    });
}

