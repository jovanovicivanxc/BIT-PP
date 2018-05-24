(function () {
    function calculatesTax(amount) {
        const tax = 20;
        return amount * tax / 100;

    }

    let a = calculatesTax(130);
    console.log(a);
})();