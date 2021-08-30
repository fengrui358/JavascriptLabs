import { Button } from 'antd'

interface Greeting {
    name: string,
    firstName: string,
}

const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

// const Hello : React.FC<Greeting> = ({
//     name,
//     firstName
// }) => <Button>Hello {name}</Button>

// 定义默认值
Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello