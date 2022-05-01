const names = 'Nicollas'
const salary = 1700

console.log(names + ' ganha R$ ' + salary + ' reais');

const newSalary = (salary * 0.18) + salary

if(salary > 3000){
console.log(names + ' seu salário será ' + newSalary + ' reais, e você deverá pagar imposto');
} else{
console.log(names + ' seu salário será ' + newSalary + ' reais, e você não deverá pagar imposto');
}