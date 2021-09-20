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
        <p>"This is the Pictures component"</p>
      </div>
    )
  }
}

export default Pictures;
