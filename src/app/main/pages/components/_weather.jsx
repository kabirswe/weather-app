// React
import React from 'react';
import { Link } from 'react-router-dom';

// Component
export class WeatherDefault extends React.Component {
    render() {
        const object = this.props.object;
        return (
            <div className="weather-list">
                <div className="list-block">
                    <h1>{object.city}</h1>
                </div>
                <div className="list-block">
                    <img src={object.icon} alt={object.city} />
                </div>
                <div className="list-block">
                    <h3>Temperature: {object.temperature.toFixed(2)}</h3>
                </div>
                <div className="list-block">
                    <h3>Maximum Temperature: {object.maxTemperature.toFixed(2)}</h3>
                    <h3>Minimum Temperature: {object.minTemperature.toFixed(2)}</h3>
                </div>
                <div className="list-block">
                    <h3>Location: {object.city} {object.location_type}</h3>
                    <button type="button">
                        <Link
                            to={`/details/${object.id}/`}
                        >
                            details
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export const Weather = WeatherDefault;
