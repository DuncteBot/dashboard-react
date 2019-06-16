import axios from 'axios';

export async function loadGuilds() {
    const {data: response} = await axios.get('/getUserGuilds');

    console.log(response);
}

export async function getOauthUrl() {
    const {data: response} = await axios.get('/auth/url');

    return response;
}

export async function login(code, state) {
    const {data: response} = await axios.get('/auth/login', {
        params: {code, state}
    });

    return response;
}

export function getSearchObject() {
    const pairs = window.location.search.substring(1).split('&');
    const obj = {};

    for (let p of pairs) {
        if (p === '') {
            continue;
        }

        const pair = p.split('=');

        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return obj;
}
