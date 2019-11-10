import React from 'react';
import SiteHeader from '../../global/header/site-header';
import PageContent from './page-content/page-content';

class Profile extends React.Component {
    render() {
        return (
            <div className="page vh-100">
                <SiteHeader />
                <PageContent />
            </div>
        );
    }
}

export default Profile;
