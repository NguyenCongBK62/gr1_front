import {Component} from 'react';
import './LoginPage.css';
import google from './google.png';
import { Form, Input, Button, Checkbox } from 'antd';

class LoginPage extends Component {
  render() {
        return (
            <div className='login'>
                <h1 className='login-title'>Đăng nhập ngay để truy cập tài khoản của bạn</h1>
                <button className='login-by-gg'>
                    <img src={google} className='gg-icon'/>
                    <p className='login-by-gg-content'>Sign in with google</p>
                </button>
                <div style={{width: '35%', margin: '2rem auto'}}>
                    <div style={{float:'left', width: '45%', marginTop: '5px'}}><hr/></div>
                    <div style={{float: 'right', width: '45%', marginTop: '5px'}}><hr/></div>
                    <p style={{fontSize: '16px', margin: 'auto'}}>or</p>
                </div>     

                <Form
                style={{
                    width: '35%',
                    margin: '2rem auto'
                }}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input placeholder='Email'/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password placeholder='Password'/>
                    </Form.Item>

                    <Form.Item  name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%', height: '45px', backgroundColor: '#cc3e2f', border: 'none', fontSize: '20px', fontWeight: 'bold'}}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            
        );
    }
};

export default LoginPage;