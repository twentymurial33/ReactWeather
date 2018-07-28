import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';
import ScrollToNext from "./components/scrollToNext";

const API_KEY= "602a4e2c713e745ad793e5d9e5c58297";

class App extends React.Component{
    state={
        temperature:undefined,
        city:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined,

    }
    getWeather=async(e)=>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;

        const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data=await api_call.json();
        if(city && country){
            console.log(data);
            this.setState({
                temp:data.main.temp,
                city:data.name,
                country:data.sys.country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:"" 
        });

    }else {
        this.setState({
            temperature:undefined,
            city:undefined,
            country:undefined,
            humidity:undefined,
            description:undefined,
            error:"Please enter error"

    });

    }

}
    render(){
        return(
        <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.humidity}
        error={this.state.error}
       
        />
        <ScrollToNext pageSelector=".portfolio-page" />
        </div>
        );
    }
}

export default App;