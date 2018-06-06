const dob = (date) => {
    return date.slice(8, 10) + ". " + date.slice(5, 7) + ". " + date.slice(0, 4);
}

const shorten = (email) => {
    let a = email.slice(0, 3);
    let b = email.split("@");
    return a + "...@" + b[1];
}

const toUpperCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
export { dob, shorten, toUpperCase };