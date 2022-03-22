/**
 * Sets the background of the page to a random image from the images file
 * by setting the background image property on body.
 */
function setBackground(){
    options = ["0410", "0718", "0753", "1058", "1699", "1806", "3204", "3325", "4290"];
    const randomEl = options[Math.floor(Math.random() * options.length)]; 
    $("body").css("background-image", `url(images/IMG_${randomEl}.JPG`);
}


/**
 * Retrieves a quote from the API.
 */
function getQuote(){
    $.get("https://api.quotable.io/random", (response) => {
        console.log(response);
        $(".quote").fadeOut('slow', () => $(".quote").text(response.content));
        $(".quote").fadeIn('slow');

        $(".quote-author").fadeOut('slow', () => $(".quote-author").text("- " + response.author));
        $(".quote-author").fadeIn('slow');
    });
}

/**
 * Calls startup functions.
 */
$(document).ready(() => {
    getQuote();
    setBackground();
    $(".quote-container").click(getQuote);
})