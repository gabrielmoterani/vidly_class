import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './like'
class MoviesComponent extends Component {
    state = { 
        movies: getMovies()
     }

     handleLike = (id) => {
        const movies = [...this.state.movies];
        const indexOfChanged = movies.map(m => m._id).indexOf(id);
        movies[indexOfChanged].liked = !movies[indexOfChanged].liked
        this.setState({movies});
     }
     
    render() { 
        const count = this.state.movies.length;
        if( count === 0 ) return <p>No Movies to Show</p>
        return (
            <React.Fragment>
                <h4>Showing {count} on database</h4>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Like</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map( movie => 
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><a onClick={() => this.handleLike(movie._id)}><Like  liked={movie.liked}/></a></td>
                                <td><button onClick={() => this.handleDeleteMovieInServer(movie)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    handleDeleteMovieInServer = movie => {
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({movies})
    }

}
 
export default MoviesComponent;