class UIModule {
    displayUsers(users) {
        console.log("from ui: ", users);
        this.createElement(users);
    };

    createElement(data) {
        for (var i = 0; i < data.items.length; i++) {
            var img = $("<img>", {
                src: data.items[i].avatar_url,
                width: 300,
            })
                .appendTo($("div"));
            var txt = $("<span></span>").text(data.items[i].login)
                .appendTo($("div"));
        }
    }
}
export default UIModule;