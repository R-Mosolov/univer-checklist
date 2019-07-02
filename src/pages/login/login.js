import React from 'react';
import SiteHeader from '../site-header/site-header';
import SiteContent from './site-content/site-content';

class Login extends React.Component {
    render() {
        return (
            <div className="page">
                <SiteHeader />
                <SiteContent />
            </div>
        );
    }
}

export default Login;