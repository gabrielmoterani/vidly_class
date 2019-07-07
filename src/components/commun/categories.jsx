import React, { Component } from 'react';
class Categories extends Component {
    render() { 
        const {genres, onItemSelect, selectedGenre} = this.props;
        return (
            <div>
                <ul className="list-group">
                    {genres.map(genre => 
                        <li 
                        onClick={() => onItemSelect(genre)} 
                        key={genre.name} 
                        className={genre === selectedGenre ? "list-group-item active pointer" : "list-group-item pointer"}
                        >
                            {genre.name}
                        </li>
                    )}
                </ul>
            </div>
          );
    }
}
 
export default Categories;