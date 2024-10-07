// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    const Password = userPassword.length
    if (Password < 6) {
        return "Weak"
    } else if ( Password >= 6 && Password <= 10) {
        return "Medium"
    } else {
        return "Strong"
    }
}
let userPassword1 = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword1)); // "Strong"

let userPassword2 = "TechUp";
console.log(checkPasswordStrength(userPassword2)); // "Medium"

let userPassword3 = "abcde";
console.log(checkPasswordStrength(userPassword3)); // "Weak"