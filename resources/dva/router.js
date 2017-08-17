import React from 'react';
import {Router, Route} from 'dva/router';
import Index from './routes/IndexPage';
import Articles from './routes/articles';
import 'antd/dist/antd.css';
import './app.scss';


export const routes = (
    <div>
        <Route path="/articles" component={Articles}/>
        <Route path="/" component={Articles}/>
        <Route path="*" component={Index}/>
    </div>
);

export default function ({history}) {
    return (
        <Router history={history}>
            { routes }
        </Router>
    );
}
