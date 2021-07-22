import './styles/index.scss';

const randomNumber = () => {
    return Math.random() * 1000;
}

document.body.innerHTML = randomNumber();

console.log(randomNumber());