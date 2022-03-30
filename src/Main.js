import Button from './components/Button/Button';
import Chips from './components/Chips/Chips';
import Slider from './components/Slider/Slider';
import TextInput from './components/TextInput/TextInput';
import './Main.scss';

const Main = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="main">
      <div className="container">
        <Slider />
        <Chips />
        <TextInput />
        <div className="main__btns">
          <Button btnClass="white" text="На карте" />
          <Button btnClass="blue" text="Все пляжи страны" />
        </div>
      </div>
    </div>
  );
};

export default Main;
