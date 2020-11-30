import React from "react"
import {Link} from "react-router-dom";
import {Menu} from "antd";
import {HomeOutlined, PoweroffOutlined} from "@ant-design/icons";

export default function Navegation(){
    return(
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined/>} >
                <Link to={"/"}>
                    <span>Home</span>
                </Link>                
            </Menu.Item>
            <Menu.Item key="2" icon={<PoweroffOutlined/>}>
                <Link to={"/login"}>
                    <span>Login</span>
                </Link>                   
            </Menu.Item>
        </Menu>
    )
}