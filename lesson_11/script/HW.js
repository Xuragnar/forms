const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];

//   1. Задача: "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.

const task1 = employees.map((employees) => employees.salary*2);
console.log(task1);


// 2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500.

const task2 = employees.filter((employees) => employees.salary > 5500);
console.log(task2);

// 3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.

const task3 = employees.reduce((acc,elem) => acc + elem.salary,0);
console.log(task3);

// 4. Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.

const task4 = employees.map((employees) => employees.name.toUpperCase());
console.log(task4);