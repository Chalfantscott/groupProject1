$(function(){

    $('.btn').click(function(e) {
        e.preventDefault();
        console.log(2);
        $.ajax({
            url: 'https://api.unsplash.com/photos/random/?client_id=3fcb101b22812b1e03c942ab3a1135fc005b9a68bc9740c5f922baaff486eea7&query=food&count=10',
            method: "GET",
            success: function(response){
                console.log(response);
                console.log(response[0].links.html);
                $('.photos').append(response);
            }
        });
    })
});