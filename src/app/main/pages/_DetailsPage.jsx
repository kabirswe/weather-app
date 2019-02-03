// React
import React from 'react';
import moment from 'moment';
import axios from 'axios';

// Component
export class DetailsPageDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: '',
            object_id: this.props.match.params.id,
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData(this.state.object_id);
    }

    getData(objectId) {
        axios.get(`https://www.metaweather.com/api/location/${objectId}`)
            .then((response) => {
                // console.log(response);
                this.setState({
                    object: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const object = this.state.object;
        const today = moment().format('YYYY-MM-DD');
        return (
            <div className="weather-list">
                <div className="list-block">
                    <h1>{object.title}</h1>
                </div>
                {object.consolidated_weather && object.consolidated_weather.map((val, i) => (
                    <div className="list-block" key={i}>
                        {today === (val.applicable_date) ? (
                            <React.Fragment>
                                <h1>Today is {moment(val.applicable_date).format('dddd')}</h1>
                                <img src={`https://www.metaweather.com/static/img/weather/png/64/${val.weather_state_abbr}.png`} alt={object.city} />
                                <h3>{val.the_temp.toFixed(2)}</h3>
                                <h3>{val.max_temp.toFixed(2)}</h3>
                                <h3>{val.min_temp.toFixed(2)}</h3>
                            </React.Fragment>
                        ) : null }
                    </div>
                ))}
                <div className="list-block">
                    <h1>Related days</h1>
                </div>

                {object.consolidated_weather && object.consolidated_weather.map((val, i) => (
                    <div className="list-block" key={i}>
                        {today !== (val.applicable_date) ? (
                            <React.Fragment>
                                <h1>{moment(val.applicable_date).format('dddd')}</h1>
                                <img src={`https://www.metaweather.com/static/img/weather/png/64/${val.weather_state_abbr}.png`} alt={object.city} />
                                <h3>{val.the_temp.toFixed(2)}</h3>
                                <h3>{val.max_temp.toFixed(2)}</h3>
                                <h3>{val.min_temp.toFixed(2)}</h3>
                            </React.Fragment>
                        ) : null }
                    </div>
                ))}
            </div>
        );
    }
}

export const DetailsPage = DetailsPageDefault;
