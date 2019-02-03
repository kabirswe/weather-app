// React
import React from 'react';
import axios from 'axios';
import moment from 'moment';

// local _components
import { Weather } from '.';

// Component
export class HomePageDefault extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listArray: [],
        };
    }

    componentDidMount() {
        const cityData = ['44418', '2344116', '565346', '638242', '560743', '9807'];
        const optionsArray = [];
        cityData.map((val) => {
            axios.get(`https://www.metaweather.com/api/location/${val}`)
                .then((response) => {
                    // console.log(response.data);
                    const today = moment().format('YYYY-MM-DD');
                    let temperature;
                    let maxTemperature;
                    let minTemperature;
                    let icon;
                    response.data.consolidated_weather.map((val) => {
                        if (today === (val.applicable_date)) {
                            temperature = val.the_temp;
                            maxTemperature = val.max_temp;
                            minTemperature = val.min_temp;
                            icon = val.weather_state_abbr;
                        }
                    });
                    const newVal = {
                        city: response.data.title,
                        temperature: temperature,
                        maxTemperature: maxTemperature,
                        minTemperature: minTemperature,
                        icon: `https://www.metaweather.com/static/img/weather/png/64/${icon}.png`,
                        location_type: response.data.location_type,
                        id: response.data.woeid,
                    };
                    optionsArray.push(newVal);
                    this.setState({
                        listArray: [...this.state.listArray, newVal],
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    render() {
        return (
            <div className="weather-block">
                {this.state.listArray.map(val => (
                    <Weather key={val.id} object={val} />
                ))}
            </div>
        );
    }
}

export const HomePage = HomePageDefault;
