$(document).ready(function() {

    fetch('https://teste.teste404.com.br/weef/sliders.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            for (var i = 0; i < myJson.length; i++) {}
        });
});