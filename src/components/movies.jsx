import React, { Component } from 'react';
import Table from './table';
import Pagination from './commun/pagination';
import {getMovies} from '../services/fakeMovieService';
import {paginate} from '../utils/paginate'
import Categories from './commun/categories';
import {getGenres} from '../services/fakeGenreService'
import _ from 'lodash';
class MoviesComponent extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: [],
        sortColumn: {path: 'title', order: 'asc'}
    }

    componentDidMount(){
    const genres = [{name: 'All Movies'}, ...getGenres()];
    this.setState({genres});
    }

    handleLike = (id) => {
    const movies = [...this.state.movies];
    const indexOfChanged = movies.map(m => m._id).indexOf(id);
    movies[indexOfChanged].liked = !movies[indexOfChanged].liked
    this.setState({movies});
    }
    
    handleDeleteMovieInServer = movie => {
      const movies = this.state.movies.filter( m => m._id !== movie._id);
      this.setState({movies})
    }
    
    handlePageChange = (page) => {
      this.setState({currentPage: page})
    }
    
    handleGenreSelect = genre => {
      this.setState({selectedGenre: genre, currentPage: 1})
    }

    handleSorting = sortColumn => {
        this.setState({sortColumn});
    }
     
    render() { 
        const {currentPage, pageSize, movies: allMovies, selectedGenre, sortColumn} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? 
        allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        const moviesCount = filtered.length;
        if( moviesCount === 0 ) return <p>No Movies to Show</p>
        return (
            <React.Fragment>
                <main className="container">
                    <div className="row m-2">
                        <div className="col-4">
                            <Categories
                            selectedGenre={this.state.selectedGenre}
                            onItemSelect={(genre) => this.handleGenreSelect(genre)}
                            genres={this.state.genres} />
                        </div>
                        <div className="col-8">
                            <h4>Showing {moviesCount} on database</h4>
                            <Table 
                            onDelete={(movie) => this.handleDeleteMovieInServer(movie)} 
                            onLike={(id) => this.handleLike(id)}
                            items={movies}
                            onSorting={this.handleSorting}
                            sortColumn={sortColumn}
                            />
                            <Pagination 
                            onChangePage={(page) => this.handlePageChange(page)} 
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            totalOfMovies={filtered.length} />
                        </div>
                    </div>
                </main>

            </React.Fragment>
        );
    }


}
 
export default MoviesComponent;