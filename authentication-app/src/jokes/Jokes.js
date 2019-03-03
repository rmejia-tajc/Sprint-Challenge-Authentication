import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';



class Jokes extends React.Component {
    state = {
        jokes: [],
    };

    componentDidMount() {
        axios.get('/jokes').then(res => {
            this.setState({ jokes: res.data });
        });
    };

    render() {
        return (
            <>
                <h2>List of Jokes</h2>
                <div>
                    {this.state.jokes.map(joke => (
                        <div key= {joke.id} className='joke'>
                            {joke.joke}
                        </div>
                    ))}
                </div>
            </>
        );
    };
};


export default requiresAuth(Jokes);