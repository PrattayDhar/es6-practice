//no more use of var
// let :It to reassign
// const :Not reassign

// 30-3 Function default parameter for not provided values

function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result = add(10);
// console.log(result);

// 30-4 Template string, multiple line string, dynamic string
const person ='Hasan Pagla';
const person2 ="Shithi pagla";
const person3 =`Mim Bbs`;

const multiline = `abdadkjdds
adhadhahdad
jgduyagdagsd
gajhgdusgda
gada
adafafaf` 
//  console.log(multiline);
// tamplate string 
const a=20 ;
const b=30;
const c= [18,312,132];
const tampatestring = `sum of ${a} and ${b} is:${a+b} ${c.length}`
// console.log(tampatestring);
// 30 - 5 Arrow function, multiple parameter, function body
function ad(first,second){
    const toatal = first + second;
    return 0;
}
const res =ad(10,12);

function ad1(first,second){
    return(first+second);
}
const add1 =ad1(5,8);

const ad2= function add2(first,second){
    const total1=first+second;
return total1;
}
const taotal2 = ad2(2,3);
// console.log(taotal2);
// arrwofunction
const add6 =(first,second)=> first+second;


// MOre arrow function 
const add7 = (first, second) => first + second;
// noperameta 
const add8 =()=>3.19;
const add9 =num => num*5;

// multiline pera metter 
 const domath =(x,y,z)=>{
    const firstsum=x+y;
    const secondsum =y+z;
    return secondsum;
 }

// 30 - 7 Spread operator, array max, copy arrays

  
// const max = math.max(12,143,14);
// show the big number 
const  numbers = [12,31,14];
 const leragest = Math.max(...numbers);
//  console.log(...numbers);
//  console.log(leragest);
const number2=[...numbers];
numbers.push(55);
number2.push(99);
// console.log(number2);
// console.log(numbers);
const Spread= [22,3,24,...numbers,2423 ,243];

// 30 - 8(advanced) Object and Array Destructuring

const fish={
    name : 'Haasa',
    id: '2134',
    phone: '0138104'
}
const {age}= {name: 'hasan',age :'32',};
const {id}=fish;
// console.log(id);


const nayok =['hasan','sakib','sajib'];
const [king,khan,bolda] =nayok;
// console.log(king);
