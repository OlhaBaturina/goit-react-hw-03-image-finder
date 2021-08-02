import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    // static propTypes = {
    //     submitMethod: PropTypes.func.isRequired,
    // };
    state = { name: '', number: '', id: '' };

    // uniqId = uuidv4();

    handleSubmit = event => {
        event.preventDefault();
        console.log('hello, baby');
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm}>
                    <button type="submit" className={s.SearchForm_button}>
                        <span className={s.SearchForm_button_label}>
                            Search
                        </span>
                    </button>

                    <input
                        className={s.SearchForm_input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
