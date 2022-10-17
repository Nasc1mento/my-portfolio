import React, { Component } from 'react'
import githubPhotoProfile from '../../assets/githubprofile.png'

export default class TextPage extends Component {
  render() {
    return (
        <div className="grid place-items-center h-screen md:flex md:justify-center">
          <div>
            <img className='rounded-full w-32 h-32' src={githubPhotoProfile} />
          </div>
            <div className='m-5 text-white'>
                <h1 className="text-xl">I'm Adryan</h1>
                <h2 className='text-lg'>A System of Internet student at IFPE</h2>
                <h2 className='text-lg'>Studying about </h2>
            </div>   
        </div> 
    )
  }
}

