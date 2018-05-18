var arrayOfPassed = [];
var arrayOfFailed = [];

document.querySelector("#buttonAdd").addEventListener('click', function () {

    var subjectElement = document.querySelector("#subjectField");
    var studentElement = document.querySelector("#studentField");
    var gradeElement = document.querySelector("#gradeField");
    var listOfPassed = document.querySelector("#passed-0");
    var listOfFailed = document.querySelector("#failed-0");
    var numberOfPassed = document.querySelector("#numberOfPassed");
    var numberOfFailed = document.querySelector("#numberOfFailed");

    var subjectInput = subjectElement.value;
    var studentInput = studentElement.value;
    var gradeInput = gradeElement.value;

    var subject = new Subject(subjectInput);
    var student = new Student(studentInput);

    function makeDivs(studentInput, gradeInput) {
        return "<div class='item-description'>" + studentInput + "</div><div class='right clearfix'><div class='item-value'>" + gradeInput
            + "</div><div class='item-delete'><button class='item-delete-btn'>x</i></button></div></div>";
    }

    if (gradeInput > 5) {
        arrayOfPassed.push(student);
        listOfPassed.innerHTML += makeDivs(studentInput, gradeInput);
    }

    else {
        arrayOfFailed.push(student);
        listOfFailed.innerHTML += makeDivs(studentInput, gradeElement);
    }



});