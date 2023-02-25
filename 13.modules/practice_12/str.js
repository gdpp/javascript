export default class Str {
    title = 'Str Class';

    capitalize(str) {
        return str.toUpperCase();
    }

    lowercase(str) {
        return str.toLowerCase();
    }

    concat(...strs) {
        let res = '';

        for (const item of strs) {
            res += `${item} `;
        }

        return res;
    }
}
