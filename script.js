$(document).ready(function() {
    fetchCarroucel();
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