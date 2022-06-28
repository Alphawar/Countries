import React from 'react';
import classes from './NotFoundPage.module.css';
import { useParams, Link } from 'react-router-dom';

const NotFoundPage = () => {

    const brokenLink = Object.values(useParams())

    return (
        <div className={classes.message__container}>
            <h1 className={classes.message__text}>You tried following the link: {brokenLink[0]}. It doesn't seem to exist. Check the spelling of the link.</h1>
            <Link to="/">Go to Main page.</Link>
        </div>
    );
};

export default NotFoundPage;