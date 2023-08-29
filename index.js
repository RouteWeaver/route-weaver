document.addEventListener("DOMContentLoaded", () => {
    var navbar = document.getElementById("navbar");
    var navbarBuffer = document.getElementById("navbar-buffer");
    var sticky = navbar.offsetTop;
    window.onscroll = () => {
        toggleStick();
    }
    
    function toggleStick() {
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
            navbarBuffer.classList.remove("hidden");
        } else {
            navbar.classList.remove("sticky");
            navbarBuffer.classList.add("hidden");
        }
    }
})