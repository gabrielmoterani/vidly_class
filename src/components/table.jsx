import React, { Component } from 'react';
import Like from './commun/like'

class Table extends Component {
    state = {  }
    render() { 
        const {onDelete, items, onLike} = this.props;
        return (
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
                    {items.map( item => 
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.genre.name}</td>
                            <td>{item.numberInStock}</td>
                            <td>{item.dailyRentalRate}</td>
                            <td><span className="pointer" onClick={() => onLike(item._id)}><Like  liked={item.liked}/></span></td>
                            <td><button onClick={() => onDelete(item)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
          );
    }
}
 
export default Table;