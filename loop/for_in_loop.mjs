// Multiplication table

const multiplytable=[];
const numvalues=5;
for (let i = 0; i < numvalues; i++) {
    const temporary=[];
    for (let j = 0; j < numvalues; j++) {
       temporary.push(i*j);
    }
    multiplytable.push(temporary);
    
}
console.table(multiplytable);