function Program(git, completed) {
    this.description = "Solving the problem";
    this.language = "Javascript";
    this.git = git;
    this.completed = completed;
    this.repositoryAndCompleted = function () {
        return "Program's description:" + this.description + ", written in " + this.language +
            ". Repository is" + this.git + ".Program is completed: " + this.completed;
    };
}

var program1 = new Program('git.url', true);

console.log(program1.repositoryAndCompleted());





function Glass(size, color, material) {
    this.velicina = size;
    this.boja = color;
    this.materijal = material;
    this.log = function () {
        var output = "";
        for (var i = 0; i < arguments.length; i++) {
            output += " " + arguments[i]
        }

        console.log(output);

    }
}

var blackTransparendGlass = new Glass(0.5, "black", "glass");
var whiteSmallWoodenGlass = new Glass(0.2, "white", "wood");

blackTransparendGlass.log("dasd", "dasdsad", 13);
// console.log(blackTransparendGlass);
// console.log(whiteSmallWoodenGlass);




// function printGlass() {
//     var glassColor = "red";
//     var glassSize = 1.0;


// }