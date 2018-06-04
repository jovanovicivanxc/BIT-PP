class UIModule {
    displayShows(shows) {
        console.log("from ui: ", shows);
        this.createElement(shows);
    };

    createElement(data) {
        var div1 = $("<div>").attr('class', 'row');
        for (var i = 0; i <= 50; i++) {
            var div2 = $("<div>");
            div2.attr('class', 'div2');
            var a = $("<a>");
            a.text(data[i].name);
            a.attr('class', "headline");
            a.attr('href', './showInfo.html?id=' + data[i].id);

            var img = $("<img>", {
                src: data[i].image.medium,
            });
            img.attr('class', 'landingImg');
            div2.addClass("col-4");
            img.appendTo(div2);
            a.appendTo(div2);
            div2.appendTo(div1);
        }
        div1.appendTo($("section"));

        if (window.location.search != "") {
            var loc = window.location.search.substring(4) - 1;

            var h = $("#headline");
            h.text(data[loc].name);
            var img1 = $("<img>", {
                src: data[loc].image.original,
            });
            img1.attr('class', "showImg");
            img1.appendTo("#contImg");
            var seasons = $("<p>");
            seasons.text(data[loc].premiered);
            seasons.appendTo("#contText");

            var det = $("#showDet");
            det.text(data[loc].summary);
        }

    }
    displaySearchResults(data) {

        var search = $("#searchShows")
        for (var i = 0; i < data.length; i++) {
            var movie1 = $("<option>");
            movie1.attr('value', data[i].show.name);
            movie1.appendTo(search);
        }
    }
}
export default UIModule;


