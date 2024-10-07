// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200
inventory.push({name: "Orange", price: 20, quantity: 300})
console.log(inventory)
for (let i=0 ; i<inventory.length ; i++) {
  let total = 0
  total = inventory[i].price * inventory[i].quantity
  console.log(total)
}

