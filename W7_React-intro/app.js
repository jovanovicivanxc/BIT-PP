const Copyright = (props) => {
    return (
        <footer>
            Copyright by {props.name}
        </footer>
    )
}

const App = () => {
    return (
        <div>
            <h1>Hello from React! </h1>
            <Copyright name="BIT Student" />
            <img src="https://www.oswestry-welshborders.org.uk/wp-content/uploads/2017/07/1223_2006-BO-Llanrhaeadr-waterfall00005.jpg" />
        </div>
    );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootElement
);