import React from 'react';
import './App.css';
import BookList from './Components/Booklist';
import toKillAMockingbird from './Images/toKillAMockingbird .jpg';
import nineteenEightyFour from './Images/1984 cover.jpg';
import theGreatGatsby from './Images/The great.jpg';
import prideAndPrejudice from './Images/pride.jpg';
import sapiens from './Images/sapiens.jpg';
import educated from './Images/Educated.jpg';
import dune from './Images/Dune.jpg';
import theHobbit from './Images/Habit.jpg';
import atomicHabits from './Images/Atomic.jpg';
import becoming from './Images/Becoming.jpg';

const App = () => {
    const books = [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", cover: toKillAMockingbird },
        { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", cover: nineteenEightyFour },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", cover: theGreatGatsby },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", cover: prideAndPrejudice },
        { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, genre: "Nonfiction", cover: sapiens },
        { title: "Educated", author: "Tara Westover", year: 2018, genre: "Memoir", cover: educated },
        { title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction", cover: dune },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy", cover: theHobbit },
        { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-Help", cover: atomicHabits },
        { title: "Becoming", author: "Michelle Obama", year: 2018, genre: "Memoir", cover: becoming },
    ];

    return (
        <div>
            <h1>My Book List</h1>
            <BookList books={books} />
        </div>
    );
};

export default App;
