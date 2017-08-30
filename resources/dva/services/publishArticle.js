import fetch from '../utils/network';

export default (data) => {
    return fetch('/api/admin/publish', data);
};