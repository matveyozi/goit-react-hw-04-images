import { useState } from 'react';

import {
  SearchBar,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';


export  function Searchbar({ onSubmit }) {
  const [inputText, setinputText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === '') {
      alert('are you looking for a space?')
      return;
    }
    onSubmit(inputText);
    setinputText('');
  };

  const handleInput = (event) => {
    setinputText(event.currentTarget.value.toLowerCase());
  };
  return (
    <div>
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            onChange={handleInput}
            value={inputText}
          />
            </SearchForm>
      </SearchBar>
    </div>
  )
}

