function logger(Array0) {
        for (let Sports of Array0)
        console.log(Sports);
   
}
let Sports= ["Soccoer","basketball","boxing"];
logger(Sports);


let dagree = [29,33,37,40]

function hottestDays(name,number){
    for(let play of name) {
        if(play > number)
        console.log(play)
    }
}
hottestDays(dagree,30);





function getBookById(books, bookId) {
  for(let book of books) {
      if (book.Id==bookId) {
      console.log(book.book2);
     break;
      } else {
          console.log("undefined")
     }
      }
}




let book1 =[
  {book2: "arabic", Id: 1},
  {book2: "english", Id: 2},
  {book2: "math", Id: 3},
  ]
  
  getBookById(book1, 2)



  
let iteam = prompt("ما هي السلعة؟  done  ");
let iteams = [];

while (iteam != "done") {
  let quantity =prompt("الكمية"); 
  let price = prompt("السعر");
  iteams.push({ iteam: iteam, price: price, quantity: quantity });
  iteam = prompt("ما هي السلعة؟  done   ");
}
console.log("الفاتورة");
let total = 0;
for (let order of iteams) {
  console.log(
    order.quantity + " " + order.iteam + " " + order.price + " KD"
  );
  total = total + fatoora.price * fatoora.quantity;
}
console.log("السعر الكلي : ", total);