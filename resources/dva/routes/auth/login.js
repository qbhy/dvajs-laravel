import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './login.scss';
import loginService from '../../services/login';
import delay from '../../utils/delay';
import fetch from '../../utils/network';
import {
    Form,
    Input,
    Icon,
    Checkbox,
    Button,
    message,
} from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                loginService(values).then(({msg, url}) => {
                    if (msg === 'success') {
                        message.success('登录成功！');
                        delay(500).then(() => {
                            console.log(window.location);
                            window.location.href = url;
                        });
                    } else {
                        message.info(msg);
                    }
                }).catch(e => {
                    console.log(e);
                    message.info('登录失败！');
                })
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: '请输入用户名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="密码"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <p>使用 <a target="_self" href="http://github.com">github</a> 登录</p>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class Login extends Component {
    render() {
        return (
            <div className={styles.loginBox}>
                <header>
                    <h3>用户登录</h3>
                </header>
                <section>
                    <WrappedNormalLoginForm />
                </section>
            </div>
        );
    }
}

export default connect(state => state)(Login)