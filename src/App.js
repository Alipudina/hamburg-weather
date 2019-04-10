import React, { Component } from 'react';
import './App.scss';
import SocialIcons from './components/SocialIcons';
import ReactIcon from './components/ReactIcon';
import Weather from './components/Weather';
import Skills from './components/Skills';
import Loader from './components/Loader';
import Foto from './components/Foto';
import ProfileText from './components/ProfileText';

const authToken = 'bd3be3a2a884168866b96b0f81237152';

class App extends Component {

  state={
    city: "Hamburg",
    temperature: '',
    icon: '',
    weatherComponent: false,
    loaderComponent: true
  }


  getWeather= async () => {
    const url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${authToken}`);
    const data= await url.json();
    console.log(data);
    this.setState({temperature: Math.trunc(data.main.temp), icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`})
    console.log(data.main.temp);
    // link for icon: http://openweathermap.org/img/w/10d.png
  }

  // changeCity=() => {
  //   this.setState({city: 'Berlin'})
  //   this.componentDidMount();
  // }

  componentDidMount() {
    this.getWeather();
    setTimeout(() => this.setState({weatherComponent: true, loaderComponent: false}), 3000);
  }

  render() {
    return (
      <>
        <ReactIcon />
        <Foto />
        <ProfileText />
        <SocialIcons/>
        {this.state.weatherComponent && <Weather
          getWeather={this.getWeather}
          temperature={(this.state.temperature-273)}
          icon={this.state.icon}
          city={this.state.city}
          />}
        {this.state.loaderComponent && <Loader />}
        <Skills />
      </>

    );
  }
}

export default App;
