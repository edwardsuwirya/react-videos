import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import youtubeParams from '../api/youtubeParams';

import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };
    onTermSubmit = async (term) => {
        youtubeParams['q'] = term;
        const response = await youtube.get('/search', {
            params: youtubeParams
        })
        this.setState({ videos: response.data.items })
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>

        )
    };
}

export default App;