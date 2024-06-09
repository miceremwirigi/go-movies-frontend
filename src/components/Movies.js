import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {

    state = {movies: []};

    //is excecuted after component is rendered to the screen
    componentDidMount() {
        fetch("/movies")
        .then(response => response.json())
        .then(result => this.setState({movies: result}))


        // this.setState({
        //     movies: [
        //         {id: 1, title: "The ShawShank Redemtion", runtime: 124},
        //         {id: 2, title: "The Mints", runtime: 143},
        //         {id: 3, title: "Rufus", runtime: 144},
        //         {id: 4, title: "Misha Chronicles", runtime: 124},
        //     ]
        // })
    }

    render() {
        return (
            <Fragment>
                <h2>Choose a Movie</h2>

                <ul>
                    {this.state.movies.map((m) => (
                        <li key={m.id}>
                            <Link to={`/movies/${m.id}`}>
                                {m.title}
                            </Link>
                        </li>
                        )
                    )}
                </ul>
            </Fragment>
        );
    }
}