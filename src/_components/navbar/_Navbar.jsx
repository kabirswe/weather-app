// React Components
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

// Main Components
export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            inputVal: event.target.value,
        });
    }

    render() {
        return (
            <div className="main-navbar">
                <Link to="/home/">
                    <Button variant="contained" color="primary">Home</Button>
                </Link>
                {/* Start input */}
                <Input
                    className="text-input"
                    id="search"
                    onChange={this.onChange}
                    type="text"
                    name="search"
                />
                {/* End input */}
                <Button variant="contained" color="secondary">
                    <Link
                        to={`/search/${this.state.inputVal}/`}
                    >
                        Search
                    </Link>
                </Button>
            </div>
        );
    }
}
