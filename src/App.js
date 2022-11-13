import './App.css';
import React from 'react';
class Header extends React.Component {
  render() {
    return (
    <>
      <h1>Here goes Header/Manu code</h1>
    </>
    );
  }
}

class Banner extends React.Component {
  render() {
    return (
    <>
    <h1>Here goes Banner Code</h1>
    </>)
  }
}

class Productsarea extends React.Component {  
  render() {    
    return (
    <>
      <h1>Here Goes Product Area</h1>
    </>
    );
  }
}

function App() {
  return (
    <>
     <Header/>
     <Banner/>
     <Productsarea/>
    </>
  );
}

export default App;