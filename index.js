const countdownDate = new Date("April 10, 2025 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}, 1000);

if (document.getElementById("registrationForm")) {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("Form submitted"); 

        const fullname = document.getElementById("fullname");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        fullname.setCustomValidity('');
        email.setCustomValidity('');
        password.setCustomValidity('');

        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        function validatePassword(password) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]{6,}$/;
            return regex.test(password);
        }

        let isValid = true;

        if (!fullname.value) {
            fullname.setCustomValidity("Full name is required.");
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            email.setCustomValidity("Please enter a valid email address.");
            isValid = false;
        }

        if (!validatePassword(password.value)) {
            password.setCustomValidity("Password must be at least 6 characters long, contain at least one letter, one number, and can include special characters.");
            isValid = false;
        }

        if (isValid) {
            alert("Registration successful!");
        } else {
            fullname.reportValidity();
            email.reportValidity();
            password.reportValidity();
        }
    });
}
