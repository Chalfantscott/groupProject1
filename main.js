$(function(){
    function renderSplashImages(arrayOfImages) {
        var finalHTML = '';
        arrayOfImages.forEach(function(image){
            finalHTML += `<img src=${image.urls.small} class=unsplashPhoto />`
        });
        return finalHTML;
    }
    $('.stillHungry').click(function(e) {
        e.preventDefault();
        $('.photos').empty();
        $.ajax({
            url: 'https://api.unsplash.com/photos/random/?client_id=3fcb101b22812b1e03c942ab3a1135fc005b9a68bc9740c5f922baaff486eea7&query=food&count=10',
            method: "GET",
            success: function(response){
                console.log(response);
                console.log(response[0].links.html);
                var html = renderSplashImages(response);
                $('.photos').append(html);
            }
        });
    })







    function renderRestaurants(arrayOfRestaurants) {
        var finalHTML = '';


        Object.keys(obj).forEach(function(key) {
            var value = obj[key];
            finalHTML += `<img src=${data.restaurant} class=unsplashPhoto />`
          });
            finalHTML += `<img src=${data.restaurant} class=unsplashPhoto />`;
        
        return finalHTML;
    }
    $('#search-form').on('submit', function(e){
        e.preventDefault();
        var searchCity = $('.search-bar').val();
        console.log(searchCity);
        var urlEncodedSearchString = encodeURIComponent(searchCity);

		$.ajax({
            url: 'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&search=Indian&street-address=' + urlEncodedSearchString,
            headers: {
                'Authorization':'Basic xxxxxxxxxxxxx',
                'X-Access-Token' : '2c032529119c0584',
                'Content-Type':'application/json'
            },
            method: 'GET',
            dataType: 'json',
            //data: YourData,
            success: function(data){
            console.log('succes: ' + data);
            console.log(data.restaurant);
                var html = renderRestaurants(data.restaurant);
                $('.desiredRestaurants').append(html);
            }
        });

	});

});
    



