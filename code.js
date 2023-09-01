const teacher = {
    firstName: "Truong",
    lastName: "Ngọc",
    getFullName (){
        return this.firstName  + ' ' + this.lastName
    }
}
const student = {
    lastName: "Bảo",
    firstName: "Thy"
}

const get = teacher.getFullName.bind(student)
// console.log(teacher.getFullName())
console.log(get())

console.log(typeof(get()))
