import React from "react";
import {Route, Switch} from "react-router-dom";

//component
import MenuTop from "../components/MenuTop";

//ant desing
import {Layout} from "antd";

//SASS
import "./LayoutBasic.scss";



export default function LayoutBasic(props){
    const {routes} = props;
    const {Content, Footer} = Layout;

    return(
        <Layout className="layout-basic" >
            <MenuTop className="layout-basic__header" />
            <Content className="layout-basic__content">
                <LoadRoutes routes={routes} />
            </Content>
            <Footer className="layout-basic__footer">
                <span>Copyright</span>
            </Footer>
        </Layout>
    )
}

function LoadRoutes({routes}){

    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))
            }
        </Switch>
    )
}