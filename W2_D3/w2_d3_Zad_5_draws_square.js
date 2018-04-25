var i;
var j;

var n = 5;

for (i = 0; i < n; i++) {

    if (i == 0 || i == n - 1) {
        //stampamo n zvezdica

        var stars = "";
        for (j = 0; j < n; j++) {
            stars = stars + "*";
        }
        console.log(stars);

    } else {
        var line = "";;

        //zvezdica
        line = line + "*";

        //n-2 beline
        for (j = 1; j <= n - 2; j++) {
            line = line + " ";
        }

        //zvezdica
        line = line + "*";

        console.log(line);
    }
}
