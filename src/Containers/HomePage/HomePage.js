import React, {Component} from 'react';
import SearchHeader from '../../Components/SearchHeader/SearchHeader';
import Landing from '../../Components/Landing/Landing';
class HomePage extends Component {
    render () {
        return (
            <>
                <SearchHeader/>
                <Landing/>
            </>
        );
    }
}

export default HomePage;