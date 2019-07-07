import React, { Component } from 'react';

class Pagination extends Component {
    render() { 
        const {totalOfMovies, onChangePage, pageSize, currentPage} = this.props
        let numberOfPages = Math.ceil(totalOfMovies/pageSize);
        if(numberOfPages <= 1) return null;
        let pages = [];
        for(let i = 1; i <= numberOfPages; i++){
            let classes = "page-item "
            if(currentPage === i) classes += "active";
            pages.push([<li onClick={() => onChangePage(i)} key={i} className={classes}><span className='page-link pointer'>{i}</span></li>]);
        }
        return (
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        {pages}
                    </ul>
                </nav>
            </div>

          );
    }
}
 
export default Pagination;