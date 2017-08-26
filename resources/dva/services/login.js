import fetch from '../utils/network';

export default (credential) => {
    return fetch('/api/login', credential)
};