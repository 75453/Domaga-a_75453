let isRed = true;

function changeTheme() {
    let theme = document.getElementById("theme");

    if (isRed) {
        theme.href = "Green.css";
    } else {
        theme.href = "Red.css";
    }

    isRed = !isRed;
}

function toggleSection() {
    let section = document.getElementById("Projekty");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}