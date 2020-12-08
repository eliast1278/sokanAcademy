import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect, setStore} from "trim-redux";
import PrivateHeader from '../public/privateHeader';
import PrivateSidebar from '../public/privateSidebar';


class PrivateRoute extends Component {
    componentDidMount() {
    }

    render() {
        let currentAuth = true;
        let route = false
        const {component: Component, ...restProps} = this.props;
        return <Route {...restProps} render={(props) =>
            (

                <>
                    <PrivateHeader/>
                    <div className="main-body">
                        <Component {...props} />
                    </div>
                    <div className="">
                        <PrivateSidebar/>
                    </div>

                </>

            )}/>
    }
}

const mstp = state => ({
    auth: state.auth,
});

export default connect(mstp)(PrivateRoute);