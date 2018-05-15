function App() {
}
App.prototype.isCCLicence = function () {
    if (this.license == "CC") {
        return console.log("Licence is Creative Commons");
    }
    else {
        return console.log("Licence is not Creative Commons");
    }
}

App.prototype.like = function (stars) {
    var stars = stars + 1;
    return stars;
    // NOT FINISHED !!!!!!!!!!!!!!!!!!!!!!!!!!
}

function WebApp(name, url, technologies, license, stars) {

    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.license = license;
    this.stars = stars;

}
WebApp.prototype.getData = function () {
    var webData = this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.license + ' ' + this.stars;
    console.log(webData);
    return webData;
}
WebApp.prototype.isReactBased = function () {
    if (this.technologies == "React") {
        return console.log("App is React based");
    }
    else {
        return console.log("App is not React based");
    }
}

WebApp.prototype.isCCLicence = App.prototype.isCCLicence;

function MobileApp(name, platforms, license, stars) {
    this.name = name;
    this.platforms = platforms;
    this.license = license;
    this.stars = stars;
}

MobileApp.prototype.getData = function () {
    var mobileData = this.name + ' ' + this.platforms + ' ' + this.license + ' ' + this.stars;
    console.log(mobileData);
    return mobileData;
}
MobileApp.prototype.isForAndroid = function () {
    if (this.platforms == "Android") {
        return console.log("App is for Android");
    }
    else {
        return console.log("App is not for Android");
    }
}

MobileApp.prototype.isCCLicence = App.prototype.isCCLicence;

var a = new WebApp('Viber', 'www.viber.com', 'React', 'CC', 5);
a.getData();
a.isReactBased();
a.isCCLicence();


var b = new MobileApp('Viber', 'javascript', 'free', 5);
b.getData();
b.isCCLicence();
