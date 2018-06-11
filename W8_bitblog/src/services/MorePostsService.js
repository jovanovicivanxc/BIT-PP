import serviceUrl from '../shared/Constants';
import Post from '../entities/Post';

class MorePostsService {
    getMorePosts(id) {
        return fetch(`${serviceUrl}posts?userId=${id}`).then(response => response.json())
            .then((data) => {
                return data.map((post) => new Post(post.title, post.body, post.id))
            })
    }
}
export default new MorePostsService();