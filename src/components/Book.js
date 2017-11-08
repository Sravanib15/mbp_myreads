import React from 'react'


function Book (props) {
    const { book } = props
    const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "No Cover"
    return (
    <li key={book.id}>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})`}}></div>
                <div className="book-shelf-changer">
                    <select value={ book.shelf }
                            onChange={event => props.shelfChanger(book, event.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    </li>
    )
}

export default Book