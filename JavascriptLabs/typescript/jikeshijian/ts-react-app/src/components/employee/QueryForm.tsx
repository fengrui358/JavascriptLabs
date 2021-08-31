import React, { Component, useState, useEffect, Props } from 'react';
import { Form, Input, Select, Button } from 'antd';

import { EmployeeRequest } from '../../interface/employee'

const { Option } = Select;

// Hooks version
// const QueryFormHooks = (props: Props) => {
//     const [name, setName] = useState('');
//     const [departmentId, setDepartmentId] = useState<number | undefined>();

//     const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
//         setName(e.currentTarget.value)
//     }

//     const handleDepartmentChange = (value: number) => {
//         setDepartmentId(value)
//     }

//     const handleSubmit = () => {
//         queryEmployee({name, departmentId});
//     }

//     const queryEmployee = (param: EmployeeRequest) => {
//         get(GET_EMPLOYEE_URL, param).then(res => {
//             props.onDataChange(res.data);
//         });
//     }

//     useEffect(() => {
//         queryEmployee({name, departmentId});
//     }, [])

//     return (
//         <>
//             <Form layout="inline">
//                 <Form.Item>
//                     <Input
//                         placeholder="姓名"
//                         style={{ width: 120 }}
//                         allowClear
//                         value={name}
//                         onChange={handleNameChange}
//                     />
//                 </Form.Item>
//                 <Form.Item>
//                 <Select
//                     placeholder="部门"
//                     style={{ width: 120 }}
//                     allowClear
//                     value={departmentId}
//                     onChange={handleDepartmentChange}
//                 >
//                     <Option value={1}>技术部</Option>
//                     <Option value={2}>产品部</Option>
//                     <Option value={3}>市场部</Option>
//                     <Option value={4}>运营部</Option>
//                 </Select>
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" onClick={handleSubmit}>查询</Button>
//                 </Form.Item>
//             </Form>
//         </>
//     )
// }

class QueryForm extends Component<{}, EmployeeRequest> {
    state: EmployeeRequest = {
        name: '',
        departmentId: undefined
    }
    handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        });
    }
    handleDepartmentChange = (value: number) => {
        this.setState({
            departmentId: value
        });
    }
    handleSubmit = () => {
        this.queryEmployee(this.state);
    }
    componentDidMount() {
        this.queryEmployee(this.state);
    }
    queryEmployee(param: EmployeeRequest) {
        // get(GET_EMPLOYEE_URL, param).then(res => {
        //     this.props.onDataChange(res.data);
        // });
        console.log(param)
    }
    render() {
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input
                        placeholder="姓名"
                        style={{ width: 120 }}
                        allowClear
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Form.Item>
                <Form.Item>
                <Select
                    placeholder="部门"
                    style={{ width: 120 }}
                    allowClear
                    value={this.state.departmentId}
                    onChange={this.handleDepartmentChange}
                >
                    <Option value={1}>技术部</Option>
                    <Option value={2}>产品部</Option>
                    <Option value={3}>市场部</Option>
                    <Option value={4}>运营部</Option>
                </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit}>查询</Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrapQueryForm = Form.create({
    name: 'employee_query'
})(QueryForm);

export default WrapQueryForm;
