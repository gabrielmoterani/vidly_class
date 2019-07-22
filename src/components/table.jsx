import React, { Component } from 'react';
import Like from './commun/like'
import {Link} from 'react-router-dom';

class Table extends Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.path === path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSorting(sortColumn);
    }
    render() { 
        const {onDelete, items, onLike} = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th onClick={() => this.raiseSort('title')} scope="col">Title</th>
                    <th onClick={() => this.raiseSort('genre.name')} scope="col">Genre</th>
                    <th onClick={() => this.raiseSort('numberInStock')} scope="col">Stock</th>
                    <th onClick={() => this.raiseSort('dailyRentalRate')} scope="col">Rate</th>
                    <th scope="col">Like</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map( item => 
                        <tr key={item._id}>
                            <td><Link to={`movies/${item._id}`}>{item.title}</Link></td>
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