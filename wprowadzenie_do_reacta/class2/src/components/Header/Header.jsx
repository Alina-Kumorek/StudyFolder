import "./Header.css"

//obrazek powinien mieszkać tutaj

const reactDescriptions = ["Funamental", "Core", "Crucial"];

function getRandomInt(n) {
    // return Math.floor(Math.random()*(1+n)); //idk jakie to było działanie
    return 0
}

export default function() {
    return(
        <header>
            <img src="./assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {reactDescriptions[getRandomInt(reactDescriptions.length)]} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    );
}