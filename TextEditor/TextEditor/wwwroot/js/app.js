
    document.addEventListener("DOMContentLoaded", function () {
        var featuresList = document.querySelector(".features");
    var listItems = document.querySelectorAll(".features li");

    // Fade in the features list
    featuresList.style.opacity = 1;

    // Fade in each list item sequentially
    listItems.forEach(function (item, index) {
        setTimeout(function () {
            item.style.display = "block";
        }, index * 200);
        });
    });

