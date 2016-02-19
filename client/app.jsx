import React from 'react';
import Counter from './counter.jsx';

export const Layout = ({ content }) => (
    <div>
        <h1>My App</h1>
        <hr />
        <div>{content}</div>
        <div><Counter /></div>
    </div>
);
