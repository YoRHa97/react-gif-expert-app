import React, {Fragment, useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue("");
        };
        
    };

    return (

        <Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Anime" value={inputValue} onChange={handleInputChange}/>
            </form>
        </Fragment>

    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};