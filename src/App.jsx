import { Component, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "luiz"
    }
  }

  render() {
    return (
      <>
      <Navbar></Navbar>

      
      <div className="hero-wrapper d-flex align-items-center text-center">
      <svg id='blob1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M32,-45.6C44.5,-35,59.7,-29.7,70.4,-17.9C81.1,-6.1,87.3,12.1,81.9,25.9C76.5,39.7,59.4,49,43.8,58.4C28.2,67.8,14.1,77.3,0,77.3C-14,77.2,-28.1,67.6,-37,56C-45.9,44.4,-49.8,30.9,-49.8,19C-49.7,7.1,-45.8,-3.2,-42.6,-14.1C-39.4,-24.9,-37,-36.3,-30,-48.7C-23.1,-61.2,-11.5,-74.7,-0.9,-73.5C9.8,-72.3,19.5,-56.3,32,-45.6Z" transform="translate(100 100)" />
      </svg>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Thiago Duarte de Oliveira</h1>
              <h3>Das memórias às fotos</h3>
              <button onClick={() => this.setState({name: "Yihua"})} className="btn btn-danger mt-4">ENTRE EM CONTATO</button>
            </div>
          </div>
        </div>
        <svg id='blob2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M32,-45.6C44.5,-35,59.7,-29.7,70.4,-17.9C81.1,-6.1,87.3,12.1,81.9,25.9C76.5,39.7,59.4,49,43.8,58.4C28.2,67.8,14.1,77.3,0,77.3C-14,77.2,-28.1,67.6,-37,56C-45.9,44.4,-49.8,30.9,-49.8,19C-49.7,7.1,-45.8,-3.2,-42.6,-14.1C-39.4,-24.9,-37,-36.3,-30,-48.7C-23.1,-61.2,-11.5,-74.7,-0.9,-73.5C9.8,-72.3,19.5,-56.3,32,-45.6Z" transform="translate(100 100)" />
      </svg>
      </div>
      

      <main>
        <div className="main-content-wrapper">
          <section className="container p-5">
            <div className="row">
              <div className="col-12 p-5">
                <h2>Bom dia!</h2>
              </div>
            </div>
          </section>
        </div>
      </main>
      </>
      
    )
    
  } 
}

export default App
