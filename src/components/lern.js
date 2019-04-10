import React, { Component } from 'react';
import './App.css';
import NavList from "./Navlist";
import {Route, BrowserRouter, Redirect, Switch} from "react-router-dom";
import Form from "./Form";
import ShowWeather from "./ShowWeather";
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     cityName: "", cities: [], formsubmitted: false, doubleText: false
    }
  }

  getCity(event){
    event.preventDefault();
     //this.setState({loading: true})
     const authToken = '16d4785f9c10724266053adb3c29dcfd';
     axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${authToken}`)
     .then(res => {
       console.log(res);
       console.log(res.data);

       let objects = {city: res.data.name.toUpperCase(),
                      img: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
                      temp: Math.round(res.data.main.temp - 273)};

      let tempCityArray = [...this.state.cities, objects];
      const findCity = this.state.cities.find(city => city.city === this.state.cityName);

      if(findCity){
        this.setState({doubleText: true})
      }

      else{
                this.setState({
                cities: tempCityArray,
                cityName: "",
                formsubmitted: true,
                doubleText: false,
            })
          }



         setTimeout(() => this.setState({formsubmitted: false}), 0)
     })

  }

  updateValue(event){
    this.setState({
      cityName: event.target.value.toUpperCase()
    })
  }

  deleteCity(event){
     const buttonIndex = event.target.getAttribute("ident");
     console.log(buttonIndex);
     const copyOfCities = Object.assign([], this.state.cities);
     copyOfCities.splice(buttonIndex, 1);

     this.setState({
       cities: copyOfCities,
       doubleText: false

     })
  }



  render() {
    return (
    <BrowserRouter>
     <>
        <h1 className="logo display-3 text-center my-5">Weather App</h1>
        <div className="container my-5">
          <div className="jumbotron">
              <NavList />
              <Route exact path="/" render={() => <Form getCity={this.getCity.bind(this)} doubleText={this.state.doubleText} updateValue={this.updateValue.bind(this)} />} />
              <Switch>
                  <Route path="/showweather" render={() => <ShowWeather index={this.props.cities} deleteCity={this.deleteCity.bind(this)} doubleText={this.state.doubleText} cities={this.state.cities} />} />
                  {this.state.formsubmitted && <Redirect to="/showweather" />}
             </Switch>
          </div>
        </div>
      </>
     </BrowserRouter>
    );
  }
}

export default App;
// ####################################################################
const authToken = 'bd3be3a2a884168866b96b0f81237152';
  let cities = ['gorgan', 'saveh'];
  const colorTemperature = [
    {limitTemp: 25, color: 'red'},
    {limitTemp: 15, color: 'yellow'},
    {limitTemp: 10, color: 'grey'},
    {limitTemp: 1, color: 'purple'},
    {limitTemp: -50, color: 'white'}
  ];

  let allCities = () => {
    let cityArray = [];
    for (city of cities) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;

      let getCity = new Promise((resolve,reject) => {
            resolve($.ajax(url));
      });
      cityArray.push(getCity);

    }
    return Promise.all(cityArray);
  }


  let showCity = async function() {

    let myCity = await allCities();
    console.log(myCity);
    let counter = 0;
    let duration = setInterval(() => {
      if (counter === myCity.length-1) {
        clearInterval(duration);
      }
      // console.log(myCity);
      let temperText1 = document.querySelector('span.temperatur1');
      let temperText2 = document.querySelector('span.temperatur2');
      let myText1 = myCity[0].name;
      // console.log(myText1);
      let myText2 = myCity[1].name;
      let temper1 = Math.round(myCity[0].main.temp-273);
      let temper2 = Math.round(myCity[1].main.temp-273);
      let color1 = colorTemperature.find(entry => temper1 > entry.limitTemp).color;
      let color2 = colorTemperature.find(entry => temper2 > entry.limitTemp).color;
      $('div.first').css('color', 'blue');
      $('div.first').css('background', color1);
      $('div.second').css('background', color2);
      // console.log(myCity[0].weather[0].description);
      counter++;
      $('div.first div.city-name1').text(myText1);
      temperText1.innerHTML=`<b>${temper1}</b> <sup>o</sup>C`;
      $('span.icon1').text(myCity[0].weather[0].description);
      $('img.image1').attr('src', `http://openweathermap.org/img/w/${myCity[0].weather[0].icon}.png`);
