var endpoint = "https://randomuser.me/api/";
var results = document.getElementById("results");
setInterval(function () {
    fetch(endpoint)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var user = data.results[0];
        results.innerHTML = "\n            <img src=\"".concat(user.picture.large, "\" class=\"user-image\">\n            <div class=\"user-info\">\n                <h2 class=\"user-name\">").concat(user.name.first, " ").concat(user.name.last, "</h2>\n                <p class=\"user-age\">").concat(user.dob.age, "</p>\n                <p class=\"user-email\">").concat(user.email, "</p>\n                <p class=\"user-location\">").concat(user.location.country, ", ").concat(user.location.city, ", ").concat(user.location.state, "</p>\n            </div>\n        ");
    });
}, 5000);
