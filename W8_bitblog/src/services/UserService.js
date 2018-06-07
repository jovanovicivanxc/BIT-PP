import serviceUrl from '../shared/Constants';
import Post from '../entities/Post';

class UserService {
    getPosts () {
        return fetch(`${serviceUrl}posts`).then(response => response.json())
        .then((data) => {
            return data.map((post) => new Post(post.title, post.body, post.id))
        })
        }
    }
export default new UserService();