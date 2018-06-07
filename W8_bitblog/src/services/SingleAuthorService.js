import serviceUrl from '../shared/Constants';
import Post from '../entities/Post';

class SingleAuthorService {
    getSingleAuthor (id) {
        return fetch(`${serviceUrl}users/${id}`).then(response => response.json())
        .then((data) => {
            return data;
        })
        }
    }

export default new SingleAuthorService;