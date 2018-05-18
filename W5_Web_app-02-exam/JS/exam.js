function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}
Exam.prototype.getExamInfo = function () {
    return this.subject + " " + this.student;
}

Exam.prototype.hasPassed = function () {
    var ind;
    if (this.grade > 5) {
        return ind = true;
    }
    else {
        return ind = false;
    }
}