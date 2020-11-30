import React from "react";
import {Link} from "react-router-dom";
import {Button} from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop(){
    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/"}>
                    <span>Logotipo</span>
                </Link>                
            </div>
            <div className="menu-top__right">
                <Link to={"/"}>
                    <Button>
                        Home
                    </Button>
                </Link> 
                <Link to={"/login"}>
                    <Button icon={<CaretDownOutlined />}>User</Button>
                </Link>                   
            </div>
        </div>
    )
}