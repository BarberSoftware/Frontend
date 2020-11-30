import React from "react";
import {Layout, Tabs} from "antd";
//import {Redirect} from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

import "./login.scss";


export default function Login() {
    const {Content} = Layout;
    const {TabPane} = Tabs;

    return(
        <Layout className="login">
            <Content className="login__content">
                <div className="login__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={<span>Regístrate</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}