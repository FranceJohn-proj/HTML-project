
function welcome(){
    document.getElementById("welcome").textContent =
        "Thank you for visiting my portfolio!";
}

// Display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form demonstration
document.getElementById("Contact").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;

        alert("Thank you for sending a message, " + name + ".");

        this.reset();
    }
);