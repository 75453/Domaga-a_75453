document.getElementById("contactForm").addEventListener("submit", function(e) {

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errors = [];

    // Imię
    const nameRegex = /^[A-Za-zÀ-ž\s-]+$/;
    if (fname === "") {
        errors.push("Imię jest wymagane");
    }
    else if(!nameRegex.test(fname)){
        errors.push("Imie nie powinno zaiwerać liczb")
    }
    // Nazwisko
    const lnameregex = /^[A-Za-zÀ-ž\s-]+$/;
    if (lname === "") {
        errors.push("Nazwisko jest wymagane");
    }
    else if(!lnameregex.test(lname)){
        errors.push("W nazwisku nie może być liczb")
    }

    // Email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Niepoprawny email");
    }

    // Wiadomość
    if (message.length < 10) {
        errors.push("Wiadomość musi mieć min. 10 znaków");
    }

    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});