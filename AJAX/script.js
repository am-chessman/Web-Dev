import env from "dotenv"

const buttonElement = $('button')
console.log(buttonElement.text())

const API_KEY = process.env.API_KEY;

function getInfo() {
    buttonElement.click(function () { 
        $.ajax({
            type: "GET",
            url: `https://newsapi.org/v2/top-headlines?q=sport&apiKey=${API_KEY}`,
            dataType: "json",
            success: function (response) {
                if (response.articles) {
                    console.log(response)
                    let articlesHtml = response.articles.map(article => `<p>${article.title}</p>`).join('');
                    $(".info-block").html(articlesHtml);
                } else {
                    $(".info-block").html("No articles found.");
                }
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data:', status, error);
                $(".info-block").html("Error fetching data.");
            }
        });
    });
}

$(document).ready(() => {
    getInfo();
});