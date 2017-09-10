import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';


class AlbumList extends Component {

    state = {albums: []};

    componentWillMount() {
        console.log("Component will mount...");


        axios.get('http://rallycoding.herokuapp.com/api/music_albums', {method: 'GET'})
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album =>

            <AlbumDetail key={album.title} album={album}/>

        );

    }

    render() {

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
