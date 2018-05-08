"use strict";

(function () {

    function Product(name, price, expDate) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price);
        this.expirationDate = new Date(expDate);
        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            return (firstLetter + lastLetter + this.id + ", " + this.price + ", " + this.expirationDate);
        }
    }
    function ShoppingBag() {
        this.productList = [];
        this.addProduct = function (prod) {
            if (prod.expirationDate > new Date()) {
                if (prod instanceof Product) {
                    this.productList.push(prod);
                }
            }
            return this.productList;
        }
        this.averagePrice = function () {
            var sum = 0;

            for (var i = 0; i < this.productList.length; i++) {
                sum = sum + this.productList[i].price;
            }
            return sum / this.productList.length;
        }
        this.calcTotalPrice = function () {
            var sum = 0;

            for (var i = 0; i < this.productList.length; i++) {
                sum = sum + this.productList[i].price;
            }
            return sum.toFixed(3);
        }
        this.getMostExpensive = function () {
            // var max = this.productList[0].price;
            // var indexMax = 0;
            // for (var i = 0; i < this.productList.length; i++) {
            //     if (this.productList[i].price > max) {
            //         max = this.productList[i].price;
            //         indexMax = i;
            //     }
            // }
            // return this.productList[indexMax].name;

            this.productList.sort(function (p1, p2) {

                return p2.price - p1.price;

                // if (p1.price == p2.price) {
                //     return 0;
                // }
                // if (p1.price < p2.price) {
                //     return 1;
                // } else {
                //     return -1;
                // }
            });

            return this.productList[0].name;
        }
    }

    function PaymentCard(balance, status, expireDate) {
        this.balance = parseFloat(balance);
        this.status = status;
        this.expireDate = new Date(expireDate);

    }

    var banana = new Product("Banana", "140.4", "12/12/2018");
    var kiwi = new Product("Kiwi", "150.43", "12/12/2018");
    var apple = new Product("Apple", "160.54", "12/10/2018");

    var ivanBag = new ShoppingBag();
    ivanBag.addProduct(banana);
    ivanBag.addProduct(kiwi);
    ivanBag.addProduct(apple);

    var ivanAccount = new PaymentCard("440", "active", "12/12/2018");

    console.log(banana.getInfo());
    console.log(kiwi.getInfo());

    console.log(ivanBag.productList);
    console.log(ivanBag.averagePrice());
    console.log(ivanBag.getMostExpensive());
    console.log(ivanBag.calcTotalPrice());

    console.log(ivanAccount);

    if (ivanAccount.balance >= ivanBag.calcTotalPrice()) {
        console.log("Purchcase is successful!");
    }
    else {
        console.log("Purchcase is not successful! " + (ivanBag.calcTotalPrice() - ivanAccount.balance).toFixed(2) + "din missing.");
    }

})();