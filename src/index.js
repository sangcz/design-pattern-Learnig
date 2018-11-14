// // 父类
// class People {
//     constructor (name, age) {
//         this.name = name
//         this.age = age
//     }
//     eat() {
//         alert(`${this.name} eat something`)
//     }
//     speak () {
//         alert(`My name is ${this.name}, age ${this.age}`)
//     }
// }
//
// // 子类
// class Student extends People {
//     constructor (name, age, number) {
//         super(name, age)
//         this.number = number
//     }
//     study () {
//         alert(`${this.name} study`)
//     }
// }
//
// let Joy = new People('Joy', 26)
// Joy.eat()
// Joy.speak()
//
// let Sweet = new Student('Sweet', 26, '000001')
// Sweet.eat()
// Sweet.speak()
// Sweet.study()
// alert('学号:'+ Sweet.number)

// class jQuery {
//     constructor (selector) {
//         let slice = Array.prototype.slice
//         let dom = slice.call(document.querySelectorAll(selector))
//         let len = dom ? dom.length : 0
//         for (let i = 0; i < len; i++) {
//             this[i] = dom[i]
//         }
//
//         this.length = len
//         this.selector = selector || ''
//     }
//     append(node) {
//
//     }
//     addClass(name) {
//
//     }
//     html (data) {
//
//     }
// }
//
// window.$ = function (selector) {
//     return new jQuery(selector)
// }
//
// var $p = $('p')
// console.log($p)
// console.log($p.addClass)