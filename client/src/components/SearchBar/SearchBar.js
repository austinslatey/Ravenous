import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', location: '', sortBy: 'best_match' };

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',


    }
  }

  getSortByClass(sortByOption) {
    if (sortBy = sortByOption) {
      return 'active';
    } else {
      return '';
    }
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div classname="SearchBar-submit">
          <button>Let's Go</button>
        </div>
      </div>
    )
  }
}

export default SearchBar;