import axios from 'axios';

const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
        Authorization: "KakaoAK c70b51251623f39e12c95659e9ee5ba0"
    },
});

//search book api
export const bookSearch = params => {
    return Kakao.get('/v3/search/book', {params});
}