import React,{Component} from "react";
import {Route} from "react-router-dom"



class PrivateRoute extends Component{
    render(){
        const {component: Component, ...restProps} = this.props;
        return <Route {...restProps} render={(props) =>
            (
                
                        <>
                         
                            <div >
                                <Component {...props} />
                            </div>


                        </>
                   
            )}/>
    }
}

export default PrivateRoute