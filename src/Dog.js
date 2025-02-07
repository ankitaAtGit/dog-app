import React from 'react';
import { connect } from 'react-redux';
import './Dog.css'

const Dog = (props) => {
  const [dog, setDog] = React.useState({
    fetching: false,
    dog: null,
    error: null
  });
  React.useEffect(() => {
    console.log("here");
    setDog({
      dog: props.dog,
      fetching: props.fetching,
      error: props.error
    })
  }, [props.dog, props.error, props.fetching])
  const fetchDoggo = () => {
    props.dogFetch();
    window.Appcues?.track("Fetching doggo");
  }
  return (
    <div className="dog-div">
      {dog.dog ? <img height={200} width={200} src={dog.dog} alt="dog" /> :
        dog.fetching ? "fetching your doggo..." : dog.error ? <p style={{
          color: "red"
        }}>Ruff ruff, something's wrong!</p> : <p>Click the button to see a dog</p>}
      <button className="woof-woof" onClick={fetchDoggo}>Woof Woof!</button>
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    dog: state.dog,
    fetching: state.fetching,
    error: state.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return { dogFetch: () => dispatch({ type: 'DOG_REQUESTED' }) };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Dog);
