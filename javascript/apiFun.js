

var topics = ["Tiramisu", "Pavlova", "Profiteroles", "Pie", "Macaron", "Churros", "Sachertorte", "Flan", "Doughnuts", "Milkshake", "Boba", "Cupcake", 'Smores', "Cookies"];



for(var i = 0; i < topics.length; i++){

    var buttonBaby = $("<button data-topic=" + topics[i] + ">" + topics[i] + "</button>");
    buttonBaby.appendTo("#buttonPlace");

}

$("button").click(function(){
    
    if(this.attributes["id"]!== undefined){
      if(this.attributes["id"].value === "submit"){

        var dessert =  $("#dessertAdd").val();
        topics.push(dessert);

        var buttonToddler = $("<button data-topic=" + dessert + ">" + dessert + "</button>");
        buttonToddler.appendTo("#buttonPlace");

        console.log("Works");
    }} else {
        var dessert = $(this).data("topic");
        // console.log(dessert);
    }

    var giphyURL = "http://api.giphy.com/v1/gifs/search?q=";

    var apiKey = "&api_key=JhUuqfOCueTKTawnI341YWWf4UNUbb0Z&limit=10";
    var queryURL = giphyURL + dessert + apiKey;

  $.ajax({
      url: queryURL,
      method: "GET"
  })

  .then(function(response){

    var gifs = response.data;
    $("#gifContainer").html("");

    for(var i = 0; i < gifs.length; i++){

        var gifPlace = $('<div id="pleaseInline">');
        // '<img src="some-source" />'
        // var dessertImage = $('<img class="gif" data-still=" ' + gifs[i].images.fixed_height_still.url + ' data-animate="' + gifs[i].images.fixed_height.url + 'data-state= "still">');
        var dessertImage = $('<img id= "gif">');
        dessertImage.attr('data-still', gifs[i].images.fixed_height_still.url);
        dessertImage.attr('data-animate', gifs[i].images.fixed_height.url);
        dessertImage.attr('data-state', "still");
        var link = dessertImage.data('still');
        console.log(link);
        dessertImage.attr('src',link);

        var rating = gifs[i].rating;
        var ratingDisplay = $("<p>").html("Rating: " + rating);

        gifPlace.append(ratingDisplay);


        gifPlace.append(dessertImage);
        
        $("#gifContainer").prepend(gifPlace);


        
$("#gif").click(function(){
    // var currentState = $(this).data('state');

    // (this).attr('data-state')
    // currentState === 'still



    if($(this).attr("data-state") === 'still'){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");

    } else if($(this).attr("data-state") === "animate"){
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");

    }
  

});






    }
    

    





  });



});




