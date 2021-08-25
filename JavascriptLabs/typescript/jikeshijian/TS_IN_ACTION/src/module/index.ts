import { print as C } from './es6/c'

export const print = function():void {
    console.log('print module')
    C()
}