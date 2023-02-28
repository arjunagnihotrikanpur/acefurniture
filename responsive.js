
document.getElementById("dropBtn1").addEventListener("click", function () {
    elem1 = document.getElementById("closeBtn1");
    elem2 = document.getElementById("dropdownContent")

    if (elem1.style.display === "none") {
        elem1.style.display = "block";
    }
    else {
        elem1.style.display = "none";
    }


    if (elem2.style.display === "none") {
        elem2.style.display = "block";
    }
    else {
        elem2.style.display = "none";
    }

});



document.getElementById("closeBtn1").addEventListener("click", function () {
    elem1 = document.getElementById("closeBtn1");
    elem2 = document.getElementById("dropdownContent")

    elem1.style.display = "none";


    elem2.style.display = "none";

});