import user from './user';
import article from './article';
import owner from './owner';
import editor from './editor';

export default function (app) {
    app.model(user);
    app.model(owner);
    app.model(article);
    app.model(editor);
}