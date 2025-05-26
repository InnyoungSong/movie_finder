/*
import React from 'react';
import Movie from './Movie';

class MovieFinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            results: [],
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        let {searchTerm} = this.state;
        searchTerm = searchTerm.trim();
        if (!searchTerm) {
            return;
        }

        const checkStatus = (response) => {
            if (response.ok){
                return response;
            }
            throw new Error ('Request was either 404 or 500');
        }

        const json = (response) => response.json()

        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=b7da8d63`)
            .then(checkStatus)
            .then (json)
            .then(data => {
                if (data.Response === 'False'){
                    throw new Error(data.Error);
                }
                if (data.Response === 'True' && data.Search) {
                    this.setState({results: data.Search, error: ''});
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const {searchTerm, results} = this.state;

        return (
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <form onSubmit = {this.handleSubmit} className='form-inline my-4'>
                            <input type="text" className="form-control mr-sm-2" placeholder="frozen" value={searchTerm} onChange={this.handleChange} />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        {(() => {
                            if (this.error) {
                                return this.error;
                            }
                            return results.map((movie) => { 
                            return <Movie key={movie.imdbID} movie={movie} />; 
                            })
                        })}
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieFinder;
*/