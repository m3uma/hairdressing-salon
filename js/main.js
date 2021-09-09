{
    const appointmentButton = document.querySelector(".button");

    appointmentButton.addEventListener("click", () => {
        document.querySelector(".form").style.display = "block";
    })

    document.querySelector(".form__button--close").addEventListener("click", () => {
        document.querySelector(".form").style.display = "none";
    })

    //document.querySelector("html").style.minHeight = window.innerHeight;
    //document.querySelector("body").style.minHeight = window.innerHeight;

}