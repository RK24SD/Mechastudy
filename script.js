// -------------- Function to Redirect to Contributor Page --------------

function redirectToContributor() {
    window.location.href = "/contributors";
}

// -------------- Function to Handle Study Material Filtering --------------

document.getElementById("filter-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const materialType = document.getElementById("material-type").value;
    const subject = document.getElementById("subject").value;
    const semester = document.getElementById("semester").value;

    const response = await fetch("/fetch-materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ materialType, subject, semester })
    });

    const materials = await response.json();
    console.log(materials);
});