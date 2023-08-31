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

const doNothing = () => {
    Swal.fire({
        icon: "success",
        title: "Thanks for joining our mailing list!",
        showConfirmButton: false,
        timer: 1500
    });
    return false;
}