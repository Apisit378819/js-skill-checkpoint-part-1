// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
const promotionCodeSALE20 = "SALE20";
const promotionCodeSALE50 = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0
  for (let i=0 ; i<products.length ; i++) {
    const product = products[i]
    totalPrice += product.price * product.quantity
  }
  if (promotionCode === "SALE20") {
    totalPrice *= 0.8
  } else if (promotionCode === "SALE50") {
    totalPrice *= 0.5
  }
  return totalPrice
}

console.log(calculateTotalPrice(products, promotionCode))
console.log(calculateTotalPrice(products, promotionCodeSALE20))
console.log(calculateTotalPrice(products, promotionCodeSALE50))
