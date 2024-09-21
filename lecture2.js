// function x () {
//     let e=45;
//     console.log (this);
// }

//  const a= function () {
//      let w=50;
//     console.log (this);
//  }

//  const b= () => {
//     console.log (this);
//  }

//  x();
//  a();
//  b();

   
// const obj ={
//     firstName:"himanshu",

// };

// const obj2={
//     firstName:"simran",
// };

// function print() {
//   console.log (this);
// }

// print.call(obj);
// print.call(obj2);


// const person={
//     name:"himanshu",
//     print :function () {
//         console.log(this);

//     },
// };

// const person1 ={
//    firstName:"king",
// };


// person.print();
// person.print.call();
// person.print.call(this);
// print.person1();

const object={
    firstName:"himanshu",
    print:()=> {
        console.log(this);
    },
    printName2: function () 
    { 
        console.log(this);

    }
};

const obj2={
    firstName:"simran",
};
object.print();
object.printName2();
object.printName2.call();
object.printName2.call();