import user from './user';
import article from './article';
import owner from './owner';

export default function (app) {
    app.model(user);
    app.model(owner);
    app.model(article);
}