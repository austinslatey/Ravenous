import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', location: '', sortBy: 'best_match' };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',


    }
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  getSortByClass(sortByOption) {
    if (sortByOption = this.state.sortBy) {
      return 'active';
    }
      return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: this.handleSortByChange(sortByOption),
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }


  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li className={sortByOptionValue} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption}</li>
    });
  }
  render() {
    return (
      <div classname="SearchBar">
        <div classname="SearchBar-sort-options">
          {/* <li>
      { renderSortByOptions }
    </li> */}
        </div>
        <div classname="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div classname="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;