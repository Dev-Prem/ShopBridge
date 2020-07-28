export default class Api {
    static host = "http://192.168.68.122:9000/";

    static headers() {
        let header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return header;
    }

    static get(route) {
        return this.call(route, null, "GET");
    }

    static post(route, params) {
        return this.call(route, params, "POST");
    }

    static delete(route) {
        return this.call(route, null, "DELETE");
    }

    static call(route, params, verb) {
        const url = `${Api.host}${route}`;
        let options = Object.assign({ method: verb }, { credentials: 'same-origin' }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers();

        return fetch(url, options)
            .then((response) => response.json())
            .then((resp) => { return resp; })
            .catch((error) => {
                throw new Error(error); });
    }
} 