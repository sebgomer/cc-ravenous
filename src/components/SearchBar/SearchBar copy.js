import React from 'react'; 
import './SearchBar.css'; 

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        } 
    }

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active'; 
        } else {
            return ''; 
        }
    }

    handleSortByChange(sortByOption) {
        this.setState(this.state.sortBy[sortByOption])
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        })
    }

    handleSearch(event) {
        this.searchYelp(
            'Pasta', 'Brooklyn', 'popularity'
        );
        event.preventDefault(); 
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
            ></li>
        })
    };

    searchYelp(term, location, sortBy) {
        console.log(`Searching yelp with ${this.state.term}, ${this.state.location}, ${this.state.sortBy}`)
    }

    render() {
        return (
            <div className="SearchBar" searchYelp={this.searchYelp}>
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()};
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar; 