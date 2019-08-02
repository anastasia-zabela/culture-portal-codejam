import React from 'react';
import Select from 'react-select';
import { Link } from "gatsby-plugin-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import searchBarStyle from './searchbar.module.scss';

class SearchBar extends React.Component {
  constructor() {
    super('searchbox');
    this.state = {
      selectedOption: null,
    };
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  clearSearch() {
    this.setState({ selectedOption: null })
  }

  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;

    return (
      <div className={searchBarStyle.searchBox}>
        <div className={searchBarStyle.searchbar}>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <div className={searchBarStyle.list}>
          {this.state.selectedOption
            ? (
              <div>
                <button onClick={this.clearSearch} type="button" className="btn btn-primary">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <Link
                  className={searchBarStyle.director}
                  key={this.state.selectedOption.slug}
                  to={`/directors/${this.state.selectedOption.slug}`}
                  style={{ background: '#d6d7d2' }}>
                  <div style={{ 
                          width: 100,
                          height: 120,
                          backgroundImage: `url(${this.state.selectedOption.image})`,
                          backgroundSize: 100
                          }}></div> 
                  <h2>{this.state.selectedOption.label}</h2>
                </Link>
              </div>
            )
            : (options.map((item) => {
                return (
                    <Link
                      className={searchBarStyle.director}
                      key={item.slug}
                      to={`/directors/${item.slug}`}>
                      <div style={{ 
                        width: 100,
                        height: 120,
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 100
                        }}></div> 
                      <h2>{item.label}</h2>
                    </Link>
                )
              }))
          }
        </div>
      </div>
    );
  }
}

export default SearchBar;