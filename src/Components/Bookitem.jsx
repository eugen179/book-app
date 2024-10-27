import React from 'react';

const BookItem = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.cover} alt={`${book.title} cover`} />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Genre: {book.genre}</p>
        </div>
    );
};

export default BookItem;