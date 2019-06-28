$(document).ready(function() {
    fetchCarroucel();
    fetchCards();
});

function fetchCarroucel() {
    fetch('https://teste.teste404.com.br/weef/sliders.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            var activeVar = "";

            for (var i = 0; i < myJson.length; i++) {
                if (i == 0)
                    activeVar = " active ";
                else
                    activeVar = "";
                $(".carousel-inner").append($('<div class="carousel-item' + activeVar + '">' +
                    '<img class="d-block w-100" src="/img/bg.png">' +
                    '<div class="carousel-content">' +
                    '<h1>' + myJson[i].title + '</h1>' +
                    '<h4>' + myJson[i].subtitle + '</h4>' +
                    '<p>' + myJson[i].excerpt + '</p>' + "</div> </div>"));
            }
        });
}


function fetchCards() {
    fetch('https://teste.teste404.com.br/weef/blog.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            for (var i = 0; i < myJson.length - 1; i++) {
                $("#cards").append($(
                    '<div class="card" style="width: 22rem;">' +
                    '<img class="card-img-top" src="' + myJson[i].image.src + '">' +
                    '<div class="card-body">' +
                    '<h6 class="card-category text-uppercase">' + myJson[i].category + '</h6>' +
                    '<h4 class="card-title">' + myJson[i].title + '</h4>' +
                    '<p class="card-text">' + myJson[i].excerpt + '</p>' +
                    '<div class="text-right">' +
                    '<a href="#" class="btn active">Acessar</a>' +
                    "</div> </div> </div>"));
            }
        });
}