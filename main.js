$(function(){

    $.ajax({
        url: 'https://api.unsplash.com/photos/random/?client_id=f803168be60df5fde4cea83c8569bc9b45c89dc3dbe217f7129c406d87bd426e&query=food&count=10',
        method: "GET",
        success: function(response){
            console.log(response);
            console.log(response[0].links.html);
            var html = renderSplashImages(response);
            $('.photos').append(html);
        }
    });

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
        $('.desiredRestaurants').empty();
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
        arrayOfRestaurants.restaurants.forEach(function(restaurant){    
            finalHTML += `<h1>${restaurant.name}</h1>`
        });
        return finalHTML;
    }
    $('#search-form').on('submit', function(e){
        e.preventDefault();
        $('.desiredRestaurants').empty();
        var searchCity = $('.search-bar').val();
        console.log(searchCity);
        var urlEncodedSearchString = encodeURIComponent(searchCity);

		$.ajax({
            url: 'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&search=pizza&street-address=' + urlEncodedSearchString,
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
            console.log(data.address.restaurants);
            $('.photos').empty();
            var html = renderRestaurants(data);
                $('.desiredRestaurants').append(html);
                //var html = renderRestaurants(data.restaurant);
                //$('.desiredRestaurants').append(html);
            }
        });

	});

});
    
