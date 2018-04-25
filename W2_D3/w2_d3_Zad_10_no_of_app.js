var a = "receAeeeenica";
app = 0;

for (i = 0; i <= a.length; i++) {
    if (a[i] == "e" || a[i] == "A") {
        app = app + 1;
    }
}

console.log(app);