export default function  (value) {
    let save = function (e) {
        e.clipboardData.setData('text/plain', value);
        e.preventDefault();
    };
    document.addEventListener('copy', save);
    document.execCommand('copy');
    document.removeEventListener('copy', save);
}