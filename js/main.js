{
    const appointmentButton = document.querySelector(".button");

    appointmentButton.addEventListener("click", () => {
        document.querySelector(".form").style.display = "block";
    })

    document.querySelector(".form__button--close").addEventListener("click", () => {
        document.querySelector(".form").style.display = "none";
    })

    $(function(){
        var date = new Date();
        var day = date.getDate() + 1;
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        var tomorrow = year + "-" + month + "-" + day;

        $(".form__input--date").attr('min', tomorrow);
    })

}