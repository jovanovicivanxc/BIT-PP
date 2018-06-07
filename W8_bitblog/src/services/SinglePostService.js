import serviceUrl from '../shared/Constants';
import Post from '../entities/Post';

class SinglePostService {
    getSinglePost (id) {
        return fetch(`${serviceUrl}posts/${id}`).then(response => response.json())
        .then((data) => {
            return data;
        })
        }
    }

export default new SinglePostService;