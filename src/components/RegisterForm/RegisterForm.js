import React from "react";
import { Form, Input, Button, notification} from "antd";
import {UserOutlined, LockOutlined } from '@ant-design/icons';

import "../Form.scss";

export default function RegisterForm(){
    return (
        <Form className="register-form">
            <Form.Item>
                <Input 
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="email" 
                    name="email" 
                    placeholder="Correo electronico" 
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password" 
                    name="repeatPassword" 
                    placeholder="Repetir contraseña" 
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Regístrarme
                </Button>
            </Form.Item>
        </Form>
    )
}