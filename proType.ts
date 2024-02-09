типизация union
// function logId(id: string | number | boolean) {
//     console.log(id);
// }

// logId(1);
// logId('zsdfsd');
// logId(true);

// в таком случае мы не можем использовать методы объекта, которые относятся только к одному из типов, 
// но можно использовать сужение типов, чтобы получить доступ к методам.
// function logId2(id: string | number | boolean) {
//     if (typeof id === 'string') {
//         console.log(id);
//     } else if (typeof id === 'number') {
//         console.log(id);
//     } else {
//         console.log(id)
//     }
    
// }

// function logObj(obj: {a: number} | {b: number}) {
//     if('a' in obj) {
//         console.log(obj.a);
//     } else {
//         console.log(obj.b)
//     }
// }

// function logMultiple(a: string | number, b: string | boolean) {
//     if(a === b) {

//     } else {
//         console.log(a)
//     }
// }
// в этом случае мы можем сравнить по типу и если они равны , то в этом примере мы можем использовать методы строки,
//  иначе если они не одинакового типа, делать какие то другие действия


типизация Literal Types
// function fetchWithAuth(url: string, method: 'post' | 'get') {

// }
// fetchWithAuth('s', 'post')
// при вызове функции url может быть любой строкой, а метод либо пост, либо гет, мы его строго задаем.
// так что кроме этого туда передать ничего не получится, но есть обходное решение.

// let method = 'post'

// fetchWithAuth('s', method as 'post')
// данное решение показывает как мы можем обойти строгое задание метода, это нужно, например, когда у нас метод является частью 
// большого объекта и нам переписывать его не к чему, мы можем создать переменную и ей назначить тип метода и кастануть его с помощью AS в функции.


типизация Type Aliases
// type User = {
//     name: string,
//     age: number,
//     skill: string[]
// }

// type Role = {
//     name: string,
//     id: number
// }

// type UserWithRole = {
//     user: User,
//     role: Role
// }

// let user: UserWithRole = {
//     name: 'asdasdf',
//     age: 33,
//     skills: ['1', '2'],
//     id: 1
// }
// в данном слдучае мы можем делать композицию типов и при создании пользователя давать ему типы из алиасов.
// но как видно в примере у нас ошибка изза пересечения свойств объекта. так что лучше испотзовать интерфейсы.


типизация Interfaces

// interface User {
//     name: string,
//     age: number,
//     skill: string[]
// }

// interface UserWithRole extends User {
//     roleId: number;
// }

// let user: UserWithRole = {
//         name: 'asdasdf',
//         age: 33,
//         skill: ['1', '2'],
//         roleId: 1
// }


'type' или 'interface'????
// при работе с примитивнымы типами лучше использовать type,
// при работе с объектами или сложными типами испотльзуем interface.


типизация optional
// interface User {
//     login: string,
//     password?: string | undefined //знак ? дает такую опцию можно и без второго параметра
// }

// const user: User = {
//     login: 'asdasd@mail.ru',
//     password: '123123'
// }

// function multiply(first: number, second?: number): number {
//     if(!second) {
//         return first * first
//     }
//     return first * second
// }

// interface UserPro {
//     login: string,
//     password?: {
//         type: 'primary' | 'secondary'
//     }
// }

// function testPass(user: UserPro ) {
//     const t = user.password?.type; //данная запись эквивалентна user.password ? user.password.type : undefined
// }


типизация unknown
// этот тип означает что данные могут придти откуда то из вне, но она на самом деле не 'any'
// на практике с этим типом можно столкнуться в try / catch

// async function getData() {
//     try {
//         await fetch('');
//     } catch (error) {
//         if (error instanceof Error) {
//             console.log(error.message)
//         }
//     }
// }

// type U1 = unknown | number;
// в юнион типа всегда будет unknoun

// type I1 = unknown & string;
// в интерсекшн типе будет не unknown


типизация never
// type paymentAction = 'refund' | 'checkout' | 'reject';

// function processAction(action: paymentAction) {
//     switch (action) {
//         case 'refund':
//             //...
//             break;
//         case 'checkout':
//             //...
//             break;
//         case 'reject':
//             //...
//             break;
//         default:
//             const _: never = action;
//             throw new Error('нет такого action');
//     }
// }

// function error(message: string): never {
//     throw new Error(message)
// }

// function isString(x: string | number): boolean {
//     if(typeof x === 'string') {
//         return true;
//     } else if (typeof x === 'number') {
//         return false
//     }
//     error('dasda');
// }


приведение типов

// interface User {
//     name: string,
//     email: string,
//     login: string
// }

// const user: User = {
//     name: 'вася',
//     email: 'vasia@mail.ru',
//     login: 'vasia'
// }

// interface Admin {
//     name: string,
//     role: number,
// }

// const admin: Admin = {
//     ...user,
//     role: 1
// }

// function userToAdmin(user: User): Admin {
//     return {
//         name: user.name,
//         role: 1
//     }
// }

типизация 'type guard'

// function logId(id: string | number) {
//     if (isString(id)) {
//         console.log(id)
//     } else {
//         console.log(id)
//     }
// }


// function isString(x: string | number): x is string {
//     return typeof x === 'string';
// }

// interface User {
//     name: string,
//     email: string,
//     login: string
// }

// interface Admin {
//     name: string,
//     role: number,
// }

// function isAdmin(user: User | Admin): user is Admin {
//     return 'role' in user;
// }

// function isAdmin2(user: User | Admin): user is Admin { //альтернативный вариант проверки
//     return (user as Admin).role !== undefined;
// }
 
// function setRoleZero(user: User | Admin) {
//     if(isAdmin(user)) {
//         user.role = 0;
//     } else {
//         throw new Error('пользователь не админ')
//     }
// }