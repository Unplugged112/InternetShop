import React from 'react'
import './Search.scss'
function Search({ setValue }) {
  return (
    <div className="main__catalog-search search">
      <form action="" className="search__form">
        <div className="search__body">
          <input
            type="text"
            placeholder="Поиск"
            className="search__input"
            onChange={(e) => setValue(e.target.value)}
          />
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.875 12.4554L17.875 16.4602C18.0536 16.6589 18.0448 16.9631 17.855 17.1511L17.155 17.8519C17.0611 17.9467 16.9333 18 16.8 18C16.6667 18 16.5389 17.9467 16.445 17.8519L12.445 13.8471C12.3344 13.7362 12.234 13.6156 12.145 13.4867L11.395 12.4855C10.1541 13.4776 8.613 14.0178 7.025 14.0173C3.75261 14.0287 0.909021 11.7686 0.177731 8.5751C-0.553569 5.38161 1.0226 2.10699 3.9731 0.689912C6.92359 -0.727158 10.461 0.0915127 12.491 2.66125C14.521 5.23099 14.5019 8.866 12.445 11.4142L13.445 12.105C13.6012 12.2051 13.7454 12.3226 13.875 12.4554ZM2.025 7.0089C2.025 9.7736 4.26357 12.0149 7.025 12.0149C8.3511 12.0149 9.6229 11.4875 10.5605 10.5487C11.4982 9.6099 12.025 8.3366 12.025 7.0089C12.025 4.24412 9.7864 2.00285 7.025 2.00285C4.26357 2.00285 2.025 4.24412 2.025 7.0089Z"
              fill="#b3b3b3"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}

export default Search