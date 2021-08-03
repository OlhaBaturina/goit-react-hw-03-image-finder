import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    // static propTypes = {
    //     submitMethod: PropTypes.func.isRequired,
    // };
    state = {
        searchQuery: '',
    };

    // uniqId = uuidv4();

    onSearchQuery = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    };

    onFormSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            toast.error('Please enter your request');
            return;
        }
        this.props.submitForm(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form onSubmit={this.onFormSubmit} className={s.SearchForm}>
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
                        onChange={this.onSearchQuery}
                        value={this.state.searchQuery}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
