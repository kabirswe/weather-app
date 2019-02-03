// React
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component
export class SearchPageDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: '',
            object_name: this.props.match.params.id,
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData(this.state.object_name);
    }

    getData(object_name) {
        axios.get(`https://www.metaweather.com/api/location/search/?query=${object_name}`)
            .then((response) => {
                console.log(response);
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
        return (
            <div className="weather-list">
                {object.length === 0 ? (
                    <h1>No results were found. Try changing the keyword!</h1>
                ) : (
                    object.map(val => (
                        <div key={val.woeid} className="list-block">
                            <h1>{val.location_type}: {val.title}</h1>
                            <button type="button">
                                <Link
                                    to={`/details/${val.woeid}/`}
                                >
                                    details
                                </Link>
                            </button>
                        </div>
                    ))
                )}

            </div>
        );
    }
}

export const SearchPage = SearchPageDefault;
