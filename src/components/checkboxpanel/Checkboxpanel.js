import React from "react";
import Checkbox from "./Checkbox";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import './checkboxpanel.css';


//a. react reusable select componentv- Accepts options list as prop
export default function Checkboxpanel({ optionlist, title, state, filter}) {
    const [categories, setCategories] = useState(optionlist);
    const [selectAll, setSelectAll] = useState(false);
    const [displayedList, setDisplayedList] = useState(optionlist);

    //b. support single selection and multiple, depend on a prop the
    //component accepts
    const handleCategoryClick = (id) => {
        // Create a new copy of the state
        const categoryCopy = [...categories];
        // Find the category that was clicked
        const categoryToUpdate = categoryCopy.find(
            (category) => category.id === id
        );

        categoryToUpdate.active = !categoryToUpdate.active;

        if (!categoryToUpdate.active && selectAll) {
            handleSelectAll();
        }

        // Set the state
        setCategories(categoryCopy);

        // Logic for selectAll
        // 1. If ALL items are active (selected), selectAll -> true
        // 2. If even ONE item is NOT active (selected), selectAll -> false
        let flag = true;
        for (let i = 0; i < categories.length; i++) {
            flag = flag && categories[i].active;
        }

        if (flag && !selectAll) {
            handleSelectAll();
        }
    };

    useEffect(() => {

    }, [selectAll]);

    //c. support multiple selection using checkboxes
    //e. when in multiple selection mode – should have “select/deselect all” option
    const handleSelectAll = () => {
        // Toggling selectAll state
        // setSelectAll((prevState) => !prevState);
        setSelectAll((selectAll) => !selectAll);

        // selectAll is NOT the latest
        setCategories(
            categories.map((category) => ({ ...category, active: !selectAll }))
        );
    };

    //g. include a callback function to display the selected item/s using simple alert as a prop
    //Shwoing an alert popup with all slected items when clicked on the "show selected button"
    const handleShowSelection = () => {
        let newCategoryToAdd = categories
            .filter((category) => {
                return category.active === true;
            })
            .map(({ label }) => ({ label }));
        var categoryString = newCategoryToAdd
            .map(function (item) {
                return item.label;
            })
            .join(",");

        if (categoryString.length > 0) {
            alert(categoryString + " - Selected");
        } else {
            alert("Nothing was selected");
        }
    };

    const categoryList = categories.map((category) => (
        <div className="item" key={category.id}>
            <Checkbox
                checked={category.active}
                onChange={() => handleCategoryClick(category.id)}
            />
            <p>{category.label}</p>
        </div>
    ));
    const filteredList = displayedList.map((category) => (
        <div className="item" key={category.id}>
            <Checkbox
                checked={category.active}
                onChange={() => handleCategoryClick(category.id)}
            />
            <p>{category.label}</p>
        </div>
    ));

    return (
        <div className="checkboxpanel">
            <h1>{title}</h1>
            {filter &&
            <div className="grey-box">
                <Filter list_data={categories} on_filter={setDisplayedList} />
                <div className="items-wrap">{filteredList}</div>
            </div>
            }
            {!filter &&
            <div className="grey-box">
                <div className="items-wrap">{categoryList}</div>
                <div className="item select-all">
                    <button onClick={handleSelectAll}>
                        {`${selectAll ? "Deselect" : "Select"}`} All{" "}
                    </button>
                </div>
                <div className="item show-selection">
                    <button onClick={handleShowSelection}>Show Selected</button>
                </div>
            </div>
            }
        </div>
    );
}

