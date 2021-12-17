import React from 'react';

const Search = () => {
  return (
    <div className="search-area">
      <form>
        <div className="form-grp">
          <label for="loanID">Loan ID</label>
          <input id="loanID" type="text" placeholder="Enter Loan ID" />
        </div>
        <div className="form-grp">
          <label for="state">State</label>
          <select id="state">
            <option>Please select</option>
            <option value="Abia">Abia</option>
            <option value="Abuja">Abuja</option>
            <option value="Rivers">Rivers</option>
            <option value="Lagos">Lagos</option>
          </select>
        </div>
        <div className="form-grp">
          <label for="date">Date</label>
          <input id="date"  type="date" />
        </div>
        <div className="search-btn">
          <button>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search;