(() => {

    let array1 = "hello";

    if (typeof array1 == "string") {
        firstLetter = array1[0].toUpperCase();
        let array2 = [];
        array2[0] = firstLetter;

        for (let i = 1; i < array1.length; i++) {
            array2[i] = array1[i];
        }

        let array3;
        array3 = array2.join("");
        console.log(array3);
    }
})();