// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 25; 
// money = 50;

const rich =  money + 25;
console.log(rich);

let count = 0;
 count = count + 10;
 console.log(count);

 const number = [23, 34, 5, 65, 34];
 numbers[1] = 55;
 number.push(8, 9, 65);
 console.log(numbers);

//  object

const student = {
     name: 'moyna pakhi',
     class: 12
}
// student = {
    // name: 'samiha pakhi'  , class: 12}  //evabe parbo na const dile , let lagbe etar jnno
    // const dile evabe 1 ta property change korte parbo shudu
    student.name = 'Filza Pakhi';
    console.log(student); 


    // loop
    const sum = 0;
    for(let i = 0; i < 0; i++){
        const num = i;
        sum = sum + i;
    }

    console.log(sum)