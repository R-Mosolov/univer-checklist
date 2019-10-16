import React from 'react';
import SiteHeader from '../../global/header/site-header';
import SiteContent from './site-content/site-content';

class Profile extends React.Component {
    render() {
        return (
            <div className="page vh-100">
                <SiteHeader />
                <SiteContent />
            </div>
        );
    }
}

export default Profile;