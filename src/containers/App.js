import React, { Component } from 'react';
import SearBar from '../components/search/SearchBar';
import Main from '../components/Main';
import './App.scss';
import Lightbox from './lightbox/Lightbox';
import Loader from '../components/loader/Loader';
import { bindActionCreators } from 'redux';
import * as gifActions from '../actions/gifactions';
import * as laoderActions from '../actions/loaderactions';

import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);

        this.filter = {
            keyword: '',
            offset: 0,
            limit: 30
        }
        this.handleKeywork = this.handleKeywork.bind(this);
        this.submit = this.submit.bind(this);
        this.handleInfiniteScroll = this.handleInfiniteScroll.bind(this);
    }

    search() {

        if (this.filter.keyword) {
            this.filter.offset = 0;
            this.props.gifManager.fetchGifs(this.filter);
        }
    }

    handleInfiniteScroll() {
        this.filter.offset += this.filter.limit
        this.props.gifManager.fetchMoreGifs(this.filter);
    }

    handleKeywork(event) {
        this.filter.keyword = event.target.value;
    }

    submit() {
        this.props.loaderManager.setLoader();
        this.search();
    }

    render() {

        const { gifs, loading } = this.props;

        return (
            <Main>
                <SearBar
                    onClick={this.submit}
                    onChange={this.handleKeywork}
                    filtering={loading} />
                {gifs.length > 0 && <Lightbox
                    gifs={gifs}
                    filter={this.handleInfiniteScroll} />}
                {loading && <Loader /> }
            </Main>
        );
    }
}

function mapStateToProps(state) {

    const data = state.gifs || [];
    let gifs = [];
    let counter = 0;

    for (let d of data) {

        for (let [key, value] of Object.entries(d.images)) {

            if (key === 'fixed_width' && value.url && value.url.slice(value.url.length - 3) === 'gif') {
                gifs.push({ url: value.url, index: counter++ });
            }
        }
    }
    return {
        gifs: gifs,
        loading: state.filtering
    }
}

function mapDispatchToProps(dispatch) {

    return {
        gifManager: bindActionCreators(gifActions, dispatch),
        loaderManager: bindActionCreators(laoderActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

