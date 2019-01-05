import React from 'react';

const SearchBar = ({onClick, onChange, filtering}) => {

    return (
        <div className="input-group" style={{zIndex: 0}}>
            <input type="text" name="keyword" onChange={onChange} className="form-control" placeholder="Search by keyword" aria-label="" aria-describedby="basic-addon1" />
            <div className="input-group-append">
                <button disabled={filtering} className="btn btn-success" onClick={onClick} type="button">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;