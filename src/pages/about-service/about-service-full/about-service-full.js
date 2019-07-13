import React from 'react';
import SiteHeader from '../../site-header/site-header';
import SiteContent from './site-content/site-content';
// import './site-content/js/progress-bar';

class AboutServiceFull extends React.Component {
    render() {
        return (
            <div className="about-service-full" id="about-service-full">
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '0%'}} aria-valuenow={25}
                         aria-valuemin={0} aria-valuemax={100} id="progressBar">
                    </div>
                </div>
                <SiteHeader />
                <SiteContent />
            </div>
        );
    }
}

export default AboutServiceFull;