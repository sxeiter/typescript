типизация основных типов
// const a: number = 5;
// const b: string = 'hello world';
// const c: boolean = true;
// const d: number[] = [1, 2, 3];
// const e: boolean = true;
// const f: string[] = ['hello world', 'sdfsdf', 'asdfsdf'];


типизация функций
// function getFullName(firstName: string, surname: string): string {
//     return `${firstName} ${surname}`
// }


// const getFullNameArrow = (firstName: string, surname: string): string => {
//     return `${firstName} ${surname}`
// }


типизация объектов
// const user = {
//     firstName: 'Павел',
//     surname: 'Бакшеев',
//     city: 'Tyumen',
//     age: 33, 
//     skills: {
//         dev: true,
//         devops: false
//     }
// }
// function getUserData(userEntity: {firstName: string, surname: string}): string {
//     return `${userEntity.firstName} ${userEntity.surname}`
// }
// console.log(getUserData(user))


типизация массивов
// const skills: string[] = ['dev', 'devops', 'testing', 'cmm'];

// for (const skill of skills) {
//     console.log(skill.toLowerCase);
// }

// const res = skills
//     .filter((s: string) => s !== 'cmm')
//     .map(s => s + '! ')
//     .reduce((a, b) => a + b)

//     console.log(res);

типизация tuples
//const skill: [number, string] = [1, 'dev']; // tuples существуют только в TS, при компиляции в JS это просто массив
// const id = skill[0];
// const skillName = skill[1];
//const [id, skillname] = skill; //можно делать деструктуризацию
//const arr: [number, string, ...boolean[]] = [1, 'sdasd', true, false] //можно сделать спред оператор в типизации


// типизация readonly
// const skill: readonly [number, string] = [1, 'dev'];
// const skills: string[] = ['dev', 'devops', 'testing', 'cmm'];
// Модификатор, запрещающий изменение значений полей объектов, указывается с помощью ключевого слова readonly . Он применяется к полям как при их объявлении в классе, так и при их описании в интерфейсе.


типизация Enums
//при компиляции enum превращается в функцию JS
// enum StatusCode {
//     SUCCESS= 1,//успех
//     IN_PROCESS = 'P',//в процессе
//     FAILED = 'F'//отклонен
// }

// const res = {
//     message: 'Платеж успешен',
//     statusCode: StatusCode.SUCCESS
// }

// if (res.statusCode === StatusCode.SUCCESS) {

// }