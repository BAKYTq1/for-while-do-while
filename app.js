// Цикл
// while, do while, for 
// let num = 0
// while (num <=10) {
//     console.log(num);
//     num++
// }
// let num = 0
// do  {
//     console.log(num);
//     num++
// }while (num <=30)

// for (let i = 10; i >= 0 ; i--){
//     console.log(i);
// }
// for (let i = 0; i <= 50; i++) {
//     for (i % 2 == 0; i < 50; i++) {
//      console.log(i);
//     }
// }
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//      console.log(i);
     
//     }else{
//         console.log(i, 'Так сан');
        
//     }
//   }
// let i

// do {
//     i = prompt('Сан жаз')
//     i++
// }while (i <= 10)


for ( let i = 0; i <= 500; i++){
    if (i / 3 === 0) {
        console.log(i, `Coca`);
    }else if (i % 5 === 0){ 
        console.log(i, `Cola`);
    }if (i % 15 === 0){
        console.log(i, `Coca-cola`);      
    }else{
        console.log(i);
        
    }
}