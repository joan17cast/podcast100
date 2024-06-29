export function customEncodeURIComponent(url: string) {
    return String(url).replace(/[^\w\-~.!*'()]/g, function(char) {
        return '%' + char.charCodeAt(0).toString(16).toUpperCase();
    });
}