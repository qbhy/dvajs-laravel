import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import route from './utils/route';
import './app.scss';

import Index from './routes/IndexPage';
import Articles from './routes/articles/container';
import ArticleList from './routes/articles/articleList';
import Article from './routes/articles/article';
import Login from './routes/auth/login';
import Admin from './routes/admin/admin';
import AdminHome from './routes/admin/adminHome';
import PublishArticle from './routes/admin/publishArticle';


export const routes = (
    <div>
        <Route path={route('home')} component={Articles}>
            <IndexRoute component={ArticleList}/>

            <Route path={route('articles')} component={ArticleList}/>
            <Route path={route('article')} component={Article}/>
        </Route>

        <Route path={route('login')} component={Login}/>

        <Route path={route('adminHome')} component={Admin}>
            <IndexRoute component={AdminHome}/>
            <Route path={route('publishArticle')} component={PublishArticle}/>
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
