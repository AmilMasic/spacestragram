import React from 'react';
import LikeButton from './LikeButton';

// the API key should be in an .env file
// I understand having it like this is a major flaw in my project
// I can't figure out how to properly make Pages, Secrets and Actions on GitHub to work
// Ideally, if I had more time, I would have hosted this on Netlify or Heroku.
const apiKey = "uZ41tRo1mYYliaInuKNDn72wI0Dj5rirLdO0OyNE";

class Pictures extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-7-28&api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw Error("Error fetching the pictures")
        }
        return response.json()
      .then(data => {
        this.setState({data: data});
      })
      .catch(err => {
        throw Error(err.message);
      });
    });
  }

  render(){

    return (
      <div>

        <p>"Curiosity Rover Pictures Taken On July 28th 2021"</p>
        {this.state.data.photos && this.state.data.photos.map(picture =>
          <article key={picture.id}>
            <img
              src={picture.img_src}
              alt="N/A"

            />

            <header> {picture.rover.name} - {picture.camera.full_name} </header>
            <h4> {picture.earth_date} </h4>
            <LikeButton/>
          </ article>)}

      </div>
    )
  }
}

export default Pictures;
