import React, { Component } from "react";

const Filter = ({ list_data, on_filter }) => {
    const updateList = (event) => {
        const txt = event.target.value;

        const filteredList = list_data.filter((item) =>
            item.label.toLowerCase().includes(txt.toLowerCase())
        );

        on_filter(filteredList);
    };
    return (
        <div className="header">
            <input
                placeholder="search category"
                className="search-category"
                onChange={(e) => updateList(e)}
            />
        </div>
    );
};

export default Filter;