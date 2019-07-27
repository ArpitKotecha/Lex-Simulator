document.querySelectorAll(".arrow_right_btn")[0].addEventListener("click", function() {
    document.querySelector(".modal1").style.display = "none";
    document.querySelector(".modal2").style.display = "block";
})

document.querySelectorAll(".arrow_left_btn")[1].addEventListener("click", function() {
    document.querySelector(".modal1").style.display = "block";
    document.querySelector(".modal2").style.display = "none";
})