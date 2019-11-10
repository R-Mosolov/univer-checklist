import React from 'react';
import SiteHeader from '../../../../header/site-header';
import SiteContent from './site-content/site-content';

class HandlerPage extends React.Component {
    render() {
        return (
            <div className="page">
                <SiteHeader />
                <SiteContent />
            </div>
        );
    }
}

export default HandlerPage;
