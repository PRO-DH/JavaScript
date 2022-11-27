//fetch관련된 get/post/patch/delete를 함수로 정규화시키기
const request = {
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload) {
        return fetch(url, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload)
        });
    },
    delete(url) {
        return fetch(url, { method: 'DELETE' });
    }
};


//이용하기 예제
request.get('/pets')
    .then(res => res.json())

request.post('/pets',{
    kind: '강아지',
    name: '초코'
})