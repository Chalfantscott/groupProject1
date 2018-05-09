class SearchModule {
    constructor(container) {
        console.log("hey");
        this.container = $(container);
        this.render();
    }

    render() {
        this.container.html("<div>this is a map</div>");
        function initMap() {
            var options = {
                zoom: 8,
                center: {lat:42.3601, lang: 71.0589}
            }
            var map = new google.maps.Map(document.getElementById('#map'), options);
        }
    }

}