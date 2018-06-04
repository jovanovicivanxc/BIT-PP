const postsData = [
    {
        "id": 1,
        "title": "adipisicing ad fugiat",
        "body": "Eu ullamco consectetur sit voluptate. Duis eiusmod eiusmod consequat duis nostrud eu proident in Lorem magna."
    },
    {
        "id": 2,
        "title": "est est consectetur",
        "body": "Voluptate ullamco ea in laboris consequat. Id mollit adipisicing veniam culpa mollit officia ex voluptate sunt sunt voluptate quis elit."
    },
    {
        "id": 3,
        "title": "quis veniam pariatur",
        "body": "Eiusmod quis anim sunt voluptate esse duis nulla voluptate adipisicing amet commodo. Elit consectetur enim esse occaecat laboris."
    },
    {
        "id": 4,
        "title": "aliquip dolore laborum",
        "body": "Non anim dolore ea non non nostrud ad irure sit irure sit amet ex sit. Dolore adipisicing et enim ex ut consequat aute minim laborum officia."
    },
    {
        "id": 6,
        "title": "ea ad et",
        "body": "Incididunt do consequat commodo ut aliquip id. Elit laborum ea esse anim tempor nostrud velit reprehenderit."
    },
    {
        "id": 7,
        "title": "pariatur ullamco eiusmod",
        "body": "Laborum aliquip elit consectetur do eiusmod excepteur duis cillum aliquip voluptate incididunt occaecat. Laboris anim veniam pariatur fugiat eu quis est est ut."
    },
    {
        "id": 8,
        "title": "incididunt duis nulla",
        "body": "Lorem eiusmod amet aute commodo nisi nisi duis enim nisi. Minim nostrud ullamco et pariatur commodo enim non pariatur cupidatat nostrud."
    },
    {
        "id": 9,
        "title": "cillum consequat aliquip",
        "body": "Ullamco velit qui officia et commodo quis nisi laborum mollit cupidatat id aliqua in occaecat. Magna tempor magna quis mollit eu aute Lorem et ex anim tempor sunt."
    }
]


const App = () => {
    return (
        <div>
            <h1>My React Blog </h1>
            <BlogList blogs={postsData} />
        </div>
    );
}

const BlogList = (props) => {
    return (
        <div>
            {props.blogs.map((blog, i) => {
                return (
                    <div>
                        <h2 key={i}>{blog.title}</h2>
                        <p> {blog.body}</p>
                    </div>
                )
            }

            )}
        </div>
    );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootElement
);

