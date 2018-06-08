import serviceUrl from '../shared/Constants';
import Author from '../entities/Author';

class AuthorsService {
    getAuthors () {
        return fetch(`${serviceUrl}users`).then(response => response.json())
        .then((data) => {
            return data.map((user) => new Author(user.name, user.id))
        })
        }
    }
export default new AuthorsService;