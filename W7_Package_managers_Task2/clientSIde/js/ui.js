class UIModule {
    displayData(blogs) {
        console.log("from ui: ", blogs);
        this.createElement(blogs);
    };

    createElement(data) {
        for (var i = 0; i < data.length; i++) {
            var div1 = $("<div>");
            div1.attr('class', 'blogPost');
            var title1 = $("<h2>").text(data[i].title);
            var body1 = $("<p>").text(data[i].body);
            title1.appendTo(div1);
            body1.appendTo(div1);
            div1.appendTo("section");

        }
    }
}
export default UIModule;

