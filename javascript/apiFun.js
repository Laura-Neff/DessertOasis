

var topics = ["Tarte aux Fraises", "Sachertorte", "Flan", "Pecan Pie", "Frankfurter Kranz", "Zulbia", "Gulab Jamun", "Baklava", "Taiyaki", "Mooncake", "Russian Tea Cookie"];



for(var i = 0; i < topics.length; i++){

    var buttonBaby = $("<button>" + topics[i] + "</button>");
    buttonBaby.appendTo("#buttonPlace");
}