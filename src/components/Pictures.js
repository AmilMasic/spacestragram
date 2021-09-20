import React from 'react';

const apiKey = process.env.REACT_APP_NASA_API_KEY;

class Pictures extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-7-27&api_key=${apiKey}`)
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

        <p>"Curiosity Rover Pictures Taken On My 30th Birthday"</p>
        {this.state.data.photos && this.state.data.photos.map(picture =>
          <div key={picture.id}>
            <img
              src={picture.img_src}
              alt="N/A"
            />

          </ div>)}

      </div>
    )
  }
}

export default Pictures;
