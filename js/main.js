let vibor_bike = document.getElementById("bike");

vibor_bike.addEventListener("click", function(){
    let slider = document.querySelector("swiper-container");
    let image = document.querySelector("#image_bike")

    if (vibor_bike.textContent === "Mountain Bikes"){
        slider.innerHTML = "<swiper-slide> <img src='img/mountain_bikes1.png' alt=''></swiper-slide><swiper-slide><img src='img/mountain_bikes2.png' alt=''></swiper-slide><swiper-slide><img src='img/mountain_bikes3.png' alt=''></swiper-slide><swiper-slide><img src='img/mountain_bikes4.png' alt=''></swiper-slide>";
        image.src = "img/mountain_bikes5.png";
        vibor_bike.style.fontWeight = 900;

    }
    if (vibor_bike.textContent === "Road Bikes"){
        vibor_bike.style.fontWeight = 900;
        slider.innerHTML = "<swiper-slide> <img src='img/mountain_bikes1.png' alt=''></swiper-slide><swiper-slide><img src='img/mountain_bikes2.png' alt=''></swiper-slide><swiper-slide><img src='img/mountain_bikes3.png' alt=''></swiper-slide><swiper-slide><img src='img/mountain_bikes4.png' alt=''></swiper-slide>";
        image.src = "img/road_bikes5.png";
    }
});