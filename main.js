//api key for nasa : 2MLiFBTcnqw4cYJF4E7QqEw0PQQqzehW8q3jcR8R
$(function(){
    var currentModule;
    $('.search').click(function() {
        currentModule = new SearchModule('.app');
    });







    /*var url = "https://api.nasa.gov/planetary/apod?api_key=2MLiFBTcnqw4cYJF4E7QqEw0PQQqzehW8q3jcR8R";

    $.ajax({
        url: url,
        success: function(result){
            console.log(result);
            $('.container').append(result);
        }
    });
*/



});