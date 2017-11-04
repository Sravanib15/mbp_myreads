import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return (
                                <Book key={book.id} book={book}/>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf