import React from 'react';

notFound404();

async function notFound404() {
    const allPagesPaths = ['/', '/registration', '/login', '/about-service-base', '/about-service-full', '/profile', '/handler-page',
        '/checklist-block-1', '/checklist-block-2', '/checklist-block-3', '/checklist-block-4', '/checklist-block-5',
        '/recommendation-page/recommendations-page', '/404-not-found'];
    const currentPage = document.location.pathname;
    let isNonExistentPage = true;

    for (let path of allPagesPaths) {
        if (currentPage === path) {
            isNonExistentPage = false;
        }
    }

    if (isNonExistentPage === true) {
        document.location.pathname = '/404-not-found';
    }
}
