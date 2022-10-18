import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/User';
import Movie from './components/Movie';

import './App.css';
import ironhackLogo from "./images/logo.png";
import ReactPlayer from 'react-player';





function App() {

  const theId = "main-container";

  const title = "Hello Ironic Hackers!";
  const user = {
    userName: "gabriel",
    age: 18
  }

  const capitalizeFirstLetter = (str) => { //gabriel
    return str[0].toUpperCase() + str.slice(1); //Gabriel
  }

  const renderSubtitle = () => {
    return <h2>This is a subtitle</h2>
  }


  const moviesArray = [
    {
      title: 'the godfather',
      rating: 9,
    },
    {
      title: 'Pulp Fiction',
      rating: 8,
    },
    {
      title: 'Coco',
      rating: 9,
    },
  ];


  return (
    <div id={theId} className="App">

      <Header />

      <img src={ironhackLogo} alt="ironhack logo" />

      <h1>{title}</h1>
      {renderSubtitle()}
      <p>Name: {user.userName}</p>
      <p>Name: {capitalizeFirstLetter(user.userName)}</p>
      <p>Age: {user.age}</p>

      <hr />
      <hr />

      <User userName="Alice" age={30} occupation="hacker" />
      <User userName="Bob" age={40} occupation="designer" />
      <User userName="Charly" age={50} occupation="project manager" />
      

      <hr />
      <hr />

      <Movie detailsObj={moviesArray[0]} />
      <Movie detailsObj={moviesArray[1]} />
      <Movie detailsObj={moviesArray[2]} />

      
      <hr />
      <hr />


      <div>
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing={false} controls={false} />
      </div>


      <Footer>
        <p>lorem ipsum one</p>
        <p>lorem ipsum two</p>
      </Footer>

    </div>
  );
}

export default App;
