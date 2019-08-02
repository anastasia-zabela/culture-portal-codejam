import React from 'react';
import Select from 'react-select';
import { Link } from "gatsby";

class SearchBar extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;
    
    return (
      <div className="search-box"
        style={{
          width: '400px'
        }}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}

        />
        {this.state.selectedOption
          ? (
            <Link
              to={`/directors/${this.state.selectedOption.slug}`}>
              <h2>{this.state.selectedOption.label}</h2>
              <p>{this.state.selectedOption.slug}</p>
            </Link>
          )
          : (options.map((item) => {
            return (
              <Link
                to={`/directors/${item.slug}`}>
                <h2>{item.label}</h2>
                <p>{item.slug} </p>
              </Link>
            )
          })

          )}
      </div>
    );
  }
}

export default SearchBar;