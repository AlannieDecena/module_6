// import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/ProsDisplayer';
import Comment from './components/Comment';
import LabGreeting from './components/LabGreeting';
import Example from './components/Example';
import Weather from './components/Weather';
import HookExample from './components/HookExample';
import HookWeather from './components/HookWeather';
import ClockDisplay from './components/Clock';
import Login from './components/Login';
import HookLogin from './components/HookLogin';
import Reservation from './components/Reservation';
import StudentList from './components/StudentList';
import RenderEmojis from './components/RenderEmojis';


function formatName(name) {
  return name.first + ' ' +name.last
}

function App() {

  const name = {first: 'Alannie', last: 'decena'}

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },

};

  return (
    <div className="App">
      
      <div className="componentBox">
      <h2>{formatName(name)}</h2>
      </div>

      {/* <MyComponent />
      <PropsDisplayer name="Kim" location="AKL" number={3} />
      <Comment user={comment.author} date={comment.date} text={comment.text}/>
      <LabGreeting name="Alannie"/>
      <Example />
      <Weather />
      <HookExample />
      <HookWeather />
      <ClockDisplay />
      <Login />
      <HookLogin />
      <Reservation /> */}
      <StudentList />
      <RenderEmojis />
    </div>
  );
}

export default App;
