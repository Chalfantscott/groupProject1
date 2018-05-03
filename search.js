class SearchModule {
    constructor(container) {
        console.log("hey");
        this.container = $(container);
        this.render();
    }

    render() {
        this.container.html("<div>this is a map</div>");
    }

}