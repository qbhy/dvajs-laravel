export default (name, defaultValue = null) => {
    let path = window.location.href;
    let index = path.indexOf('?');
    if (index === -1) {
        return defaultValue;
    }
    let params = path.substr(index + 1).split('&'), temp = '';
    for (let i = 0; i <= params.length; i++) {
        temp = name + '=';
        index = params[i].indexOf(temp);
        if (index === 0) {
            return params[i].substr(temp.length);
        }
    }
    return defaultValue;
};