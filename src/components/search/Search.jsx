import { debounce } from "lodash";
import React, { useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
const Search = () => {
  const [value, setValue] = useState("");

  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();
  const onClickClear = () => {
    setSearchValue("");
    setValue("");

    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        id="Layer_1"
        version="1.0"
        viewBox="0 0 24 24"
      >
        <g>
          <g>
            <path d="M9,4c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S6.2,4,9,4 M9,2C5.1,2,2,5.1,2,9c0,3.9,3.1,7,7,7s7-3.1,7-7C16,5.1,12.9,2,9,2    L9,2z" />
          </g>
        </g>
        <g>
          <polygon points="22,20.3 20.3,22 14,15.7 14,14 15.7,14  " />
          <rect
            height="3.6"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.9741 14.4227)"
            width="1.2"
            x="13.8"
            y="12.6"
          />
        </g>
      </svg>

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder="Поиск пицци..."
        className={styles.input}
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          version="1.1"
        >
          <path d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
