import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import route from './utils/route';
import 'antd/dist/antd.css';
import './app.scss';

import Index from './routes/IndexPage';
import Articles from './routes/articles/container';
import ArticleList from './routes/articles/articleList';
import Article from './routes/articles/article';


export const routes = (
    <div>
        <Route path={route('home')} component={Articles}>
            <IndexRoute component={ArticleList}/>

            <Route path={route('articles')} component={ArticleList}/>
            <Route path={route('article')} component={Article}/>
        </Route>
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
