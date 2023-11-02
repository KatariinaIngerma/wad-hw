// Displaying dropdown menu on click
document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.getElementById("myDropdown");

    dropbtn.addEventListener("click", function () {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});