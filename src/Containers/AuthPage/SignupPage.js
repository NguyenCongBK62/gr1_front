import {Component} from 'react';
import './SigninPage.css';
import { Form, Input, Button, Checkbox } from 'antd';
import GoogleLogin from 'react-google-login';
import {Redirect, Link} from 'react-router-dom';



class SignupPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            loggedIn: false
        }
    }

    onUserNameChange = (event) => {
        this.setState({userName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/users/signup', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password,
          })
        })
        .then(response => response.json()).then(data => {
            if(data){
                localStorage.setItem('Authorization', data.accessToken);
                localStorage.setItem('userName', data.userName);
                this.setState({loggedIn: true});
            }
        });
    }
    responseGoogle = (responseGG) => {
        fetch('http://localhost:3001/users/auth/google', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            access_token: responseGG.accessToken
          })
        })
        .then(response => response.json()).then(data => {
            if(data){
                localStorage.setItem('Authorization', data.accessToken);
                localStorage.setItem('userName', data.userName);
                this.setState({loggedIn: true});
            }
        });
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect path='/'></Redirect>
        }
        return (
            <div className='login'>
                <h1 className='login-title'>Đăng kí ngay để truy cập tài khoản của bạn</h1>
                <GoogleLogin
                    clientId="580571689507-qnst7gq9iahhnd1da2d21kfgta4f6fn6.apps.googleusercontent.com"
                    buttonText="Sign with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
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
                // initialValues={{
                //     remember: true,
                // }}
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
                        <Input placeholder='User Name' onChange={this.onUserNameChange}/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ]}
                    >
                        <Input placeholder='Email' onChange={this.onEmailChange}/>
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
                        <Input.Password placeholder='Password' onChange={this.onPasswordChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            style={{
                                width: '100%', 
                                height: '45px', 
                                backgroundColor: '#cc3e2f', 
                                border: 'none', 
                                fontSize: '20px', 
                                fontWeight: 'bold'
                            }}
                            onClick={this.onSubmit}    
                        >
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
                <div>You had account? go to <Link to='/signin'>SignIn</Link></div>
            </div>
            
        );
    }
};

export default SignupPage;