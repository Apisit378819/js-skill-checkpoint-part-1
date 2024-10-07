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
console.log(checkPasswordStrength(userPassword))