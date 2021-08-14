import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  onSearchTermSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSearchFormSubmit(searchTerm);
  };

  onSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <form
        onSubmit={this.onSearchTermSubmit}
        className="
          w-full mt-3
          flex justify-around items-center 
          bg-white rounded focus:shadow-outline 
        "
      >
        <SearchIcon />
        <input
          className="py-3 w-full px-3 focus:outline-none"
          type="text"
          placeholder="Explore Events"
          name="searchTerm"
          value={searchTerm}
          onChange={this.onSearchTermChange}
          autoComplete="off"
        />
        <ArrowRightIcon />
      </form>
    );
  }
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      widht="20"
      className="ml-3 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

export default SearchBar;
