import React from "react";
import css from "./Filter.module.css";
import PropTypes from "prop-types";

export const Filter =( { valueFilter, onChangeFilter } ) => {
  return (
    <div className={css.searchInput}>
      <label>Find contact by name
        <input
        type="text"
        onChange={onChangeFilter}
        value={valueFilter}
        />
      </label>
    </div>
  )
}

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
