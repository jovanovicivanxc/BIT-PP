import serviceUrl from '../shared/Constants';

class NewPostService {
    postNewPost(title, content) {
        return fetch(`${serviceUrl}posts`, {
            method: 'post',
            body: JSON.stringify({ title: title, content: content })
        }).then(response => response.json())
            .then((data) => {
                return data;
            })
    }
}
export default NewPostService;