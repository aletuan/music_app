import React, { Component } from 'react';

import Album from './Album';
import { client } from '../Client';
import VerticalMenu from './VerticalMenu';
import { Route } from 'react-router-dom';

const ALBUM_IDS = [
  '23O4F21GDWiGd33tFN3ZgI',
  '3AQgdwMNCiN7awXch5fAaG',
  '1kmyirVya5fRxdjsPFDM05',
  '6ymZBbRSmzAvoSGmwAFoxm',
  '4Mw9Gcu1LT7JaipXdwrq1Q',
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    console.log('client: component did mount');
    this.getAlbums();
  }

  getAlbums = () => {
    console.log('client: get albums information');
    client.setToken('D6W69PRgCoDKgHZGJmRUNA');
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
       ));
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      return (
        <div className='ui two column divided grid'>
          <div
            className='ui six wide column'
            style={{ maxWidth: 250 }}
          >
            {/* VerticalMenu will go here */}
            <VerticalMenu albums={this.state.albums} />
          </div>
          <div className='ui ten wide column'>
            <Route
              path='/albums/:albumId'
              render={({ match }) => {
                const album = this.state.albums.find(
                  (a) => a.id === match.params.albumId
                );
                return (
                  <Album
                    album={album}
                  />
                );
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default AlbumsContainer;
