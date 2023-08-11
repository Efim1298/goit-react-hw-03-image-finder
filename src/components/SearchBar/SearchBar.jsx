import { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const searchQuery = event.target.elements.searchName.value.trim(); // Получаем введенный поисковый запрос и удаляем пробелы
    this.props.onSubmit(searchQuery); // Передаем введенный поисковый запрос родительскому компоненту
    event.target.reset(); // Сбрасываем значение в поле ввода после отправки формы
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <MdSearch style={{ width: 25, height: 25 }} />
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
