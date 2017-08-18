import user from './user';
import article from './article';

export default function (app) {
    app.model(user);
    app.model(article);
}