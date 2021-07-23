import Header from "./Header/Header";
import prev from '../images/prev.jpg';

const App = () => {
    console.log(5)
    return <>
        <Header />
        <main>
            Main
        </main>
        <footer>
            Footer
            <img src={prev} alt="ddd"/>
        </footer>
    </>
};

export default App;