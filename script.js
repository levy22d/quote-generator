/**
 * Sets the background of the page to a random image from the images file
 * by setting the background image property on body.
 */
function setBackground(){
    options = ["0410", "0718", "0753", "1058", "1699", "1806", "3204", "3325", "4290"];
    const randomEl = options[Math.floor(Math.random() * options.length)]; 
    $("body").css("background-image", `url(images/IMG_${randomEl}.JPG`);
}

function getQuote(){
    $.get("https://api.quotable.io/random", (response) => {
        console.log(response);
        $(".quote").text(response.content);
        $(".quote-author").text("- " + response.author);
    });
}

$(document).ready(() => {
    getQuote();
    setBackground();
    $(".quote-container").click(getQuote);
})