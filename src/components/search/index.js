import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import magnifierIcon from 'assets/icons/magnifier.svg';
import { debounce } from 'lodash';

import './index.scss';

const SearchInput = ({
  onSearch,
  placeholder,
  ...props
}) => {
  const debounceSearch = debounce(({ target: { value }}) => onSearch(value || undefined), 500)
  const inputRef = useRef();
  return <div className="search-input">
    <div className="search-input__img">
     <img src={magnifierIcon} alt="magnifier" onClick={() => inputRef.current.focus()}/>
    </div>
    <input 
      placeholder={placeholder} 
      onChange={debounceSearch}
      ref={inputRef}
      {...props} 
    />
  </div>
};

SearchInput.propTypes = {
  placeholder: PropTypes.string
}

SearchInput.defaultProps = {
  placeholder: 'Search'
}

export default SearchInput;
