import React, { Component } from 'react';
import { Link } from 'react-router';

import Nav from './Nav';
import { getFoodData } from './utils/chucknorris-api';

class FoodJokes extends Component {
    constructor() {
        super()
        this.state = { jokes: [] };
    }

    getFoodJokes() {
        getFoodData().then(jokes => {
            this.setState({ jokes })
        })
    }

    componentDidMount() {
        this.getFoodJokes();
    }

    render() {
        const { jokes } = this.state;

        return (
            <div>
                <Nav />
                <h3 className="text-center">Chuck Norris Food Jokes</h3>
                <hr/>
                { jokes.map((joke, index) => { return (
                    <div className="col-sm-6" key={index}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"> <span className="btn">{ joke.id }</span></h3>
                            </div>
                            <div className="panel-body">
                                <p>{ joke.joke }</p>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        )
    }
}

export default FoodJokes;