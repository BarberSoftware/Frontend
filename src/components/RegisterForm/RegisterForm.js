import React, {useState} from "react";
import { Form, Input, Button, notification} from "antd";
import {UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {emailValidation, minLengthValidation} from "../../utils/FormValidation";
import {registerUserApi} from "../../api/user";

import "../Form.scss";

export default function RegisterForm(){

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    });
    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false
    });


    const changeForm = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    const inputValidation = e => {
        const {type, name} = e.target;
        if(type === "email"){
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            })
        }
        if(type === "password"){
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 4)
            })
        }
    }
    const register = async e => {
        e.preventDefault();
        const nameValue = input.name;
        const emailValue = input.email;
        const passwordValue = input.password;
        const repeatPasswordValue = input.repeatPassword;

        if(!nameValue || !emailValue || !passwordValue || !repeatPasswordValue){
            notification['error']({
                message: "Todos los campos son obligatorios"
            })
        }else {
            if(passwordValue !== repeatPasswordValue){
                notification['error']({
                    message: "Las contraseñas no coinciden"
                })
            }else {
                const result = await registerUserApi(input);
                if(!result){
                    notification["error"]({
                        message: "Email ya se encuentra en uso"
                    })
                }else{
                    notification["success"]({
                        message: "Usuario creado exitosamente"
                    })
                    resetForm();
                }
            }
        }
    }
    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");
        for(let input of inputs){
            input.classList.remove("error");
            input.classList.remove("success");
        }
        setInput({
            name: "",
            email: "",
            password: "",
            repeatPassword: ""
        })
        setFormValid({
            email: false,
            password: false,
            repeatPassword: false
        })
    }


    return (
        <Form className="register-form" onChange={changeForm} onSubmitCapture={register}>
            <Form.Item>
                <Input 
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="text"
                    name="name" 
                    placeholder="Nombre" 
                    className="register-form__input"
                    value={input.name}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="email" 
                    name="email" 
                    placeholder="Correo electronico" 
                    className="register-form__input"
                    onChange={inputValidation}
                    value={input.email}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    className="register-form__input"
                    onChange={inputValidation}
                    value={input.password}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password" 
                    name="repeatPassword" 
                    placeholder="Repetir contraseña" 
                    className="register-form__input"
                    onChange={inputValidation}
                    value={input.repeatPassword}
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