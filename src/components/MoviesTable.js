
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../redux/MoviesSlice';

const MoviesTable = () => {
    const dispatch = useDispatch();
    const {movies, loading, error} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Movie List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Year</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.title}</td>
                            <td>{movie.releaseYear}</td>
                            <td>{movie.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MoviesTable;
