var arrayOfPassed = [];
var arrayOfFailed = [];

var counterpass = 1;
var counterfail = 1;

document.querySelector("#buttonAdd").addEventListener('click', function () {

    var subjectElement = document.querySelector("#subjectField");
    var studentElement = document.querySelector("#studentField");
    var gradeElement = document.querySelector("#gradeField");
    var listOfPassed = document.querySelector("#passed-0");
    var listOfFailed = document.querySelector("#failed-0");

    var subjectInput = subjectElement.value;
    var studentInput = studentElement.value;
    var gradeInput = gradeElement.value;

    var subject = new Subject(subjectInput);
    var student = new Student(studentInput);

    function makeDivsPass(studentInput, gradeInput) {
        var el1 = document.createElement("div");
        var el2_1 = document.createElement("div");
        var el2_2 = document.createElement("div");
        var el2_2_1 = document.createElement("div");
        var el2_2_2 = document.createElement("div");
        var el2_2_2_1 = document.createElement("button");

        el1.classList.add("item", "clearfix");
        el1.id = "passed-" + counterpass;
        counterpass += 1;

        el2_1.classList.add("item-description");
        var item_des = document.createTextNode(studentInput);
        el2_1.appendChild(item_des);

        el2_2.classList.add("right", "clearfix");

        el2_2_1.classList.add("item-value");
        var item_val = document.createTextNode(gradeInput);
        el2_2_1.appendChild(item_val);

        el2_2_2.classList.add("item-delete");

        el2_2_2_1.classList.add("item-delete-btn");
        el2_2_2_1.id = "item-delete-btn";
        var button_x = document.createTextNode("x");
        el2_2_2_1.appendChild(button_x);

        var pass = document.querySelector("#passed-list");

        pass.appendChild(el1);
        el1.appendChild(el2_1);
        el1.appendChild(el2_2);
        el2_2.appendChild(el2_2_1);
        el2_2.appendChild(el2_2_2);
        el2_2_2.appendChild(el2_2_2_1);
    };

    function makeDivsFail(studentInput, gradeInput) {
        var el1 = document.createElement("div");
        var el2_1 = document.createElement("div");
        var el2_2 = document.createElement("div");
        var el2_2_1 = document.createElement("div");
        var el2_2_2 = document.createElement("div");
        var el2_2_2_1 = document.createElement("button");

        el1.classList.add("item", "clearfix");
        el1.id = "failed-" + counterfail;
        counterfail += 1;

        el2_1.classList.add("item-description");
        var item_des = document.createTextNode(studentInput);
        el2_1.appendChild(item_des);

        el2_2.classList.add("right", "clearfix");

        el2_2_1.classList.add("item-value");
        var item_val = document.createTextNode(gradeInput);
        el2_2_1.appendChild(item_val);

        el2_2_2.classList.add("item-delete");

        el2_2_2_1.classList.add("item-delete-btn");
        el2_2_2_1.id = "item-delete-btn";
        var button_x = document.createTextNode("x");
        el2_2_2_1.appendChild(button_x); 32

        var pass = document.querySelector("#failed-list");

        pass.appendChild(el1);
        el1.appendChild(el2_1);
        el1.appendChild(el2_2);
        el2_2.appendChild(el2_2_1);
        el2_2.appendChild(el2_2_2);
        el2_2_2.appendChild(el2_2_2_1);
    };

    if (gradeInput > 5 && gradeInput <= 10) {
        arrayOfPassed.push(student);
        makeDivsPass(studentInput, gradeInput);
    }

    else if (gradeInput <= 5 && gradeInput >= 1) {
        arrayOfFailed.push(student);
        makeDivsFail(studentInput, gradeInput);
    }

    else {
        alert("Wrong input! Grade has to be a number between 1 and 10.");
    }

    var sum = counterfail + counterpass;
    var totStu = document.querySelector("#total_students");
    totStu.innerHTML = "Total students: " + sum;

    var numOfPass = document.querySelector("#numberOfPassed");
    numOfPass.innerHTML = counterpass;

    var numOfFail = document.querySelector("#numberOfFailed");
    numOfFail.innerHTML = counterfail;

    var percentage = counterfail / (counterfail + counterpass) * 100;
    var perc = document.querySelector("#FailedPercentage");
    perc.innerHTML = percentage.toFixed(0) + "%";
});


document.querySelector("#item-delete-btn").addEventListener('click', function () {

    var forDeleting = document.querySelector("#passed-0");
    var parentEl = forDeleting.parentElement;
    parentEl.removeChild(forDeleting);
});


