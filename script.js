$(document).ready(function() {

    fetch('https://teste.teste404.com.br/weef/sliders.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            for (var i = 0; i < myJson.length; i++) {
                console.log(myJson[i].image.src);
                $(".carousel-inner").append($('<div class="carousel-item">' +
                    '<img class="d-block w-100" src="/img/bg.png" alt="First slide">' +
                    '<div class="carousel-content">' +
                    '<h1>' + myJson[i].title + '</h1>' +
                    '<h4>' + myJson[i].subtitle + '</h4>' +
                    '<p>' + myJson[i].excerpt + '</p>'));

            }
        });
});