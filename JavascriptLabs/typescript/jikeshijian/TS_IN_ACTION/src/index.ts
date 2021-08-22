import types from './datatype'

const s: string = 'Hello Typescript'
console.log(s)

let app = document.querySelector('.app')
if (app) {
    app.innerHTML = s
}

function print(args: any[]): void {
    args.forEach(arg => console.log(arg, typeof arg, Reflect.toString.call(arg)))
}

print(Object.values(types))

console.log('add function: ' + types.add(435, 54))
