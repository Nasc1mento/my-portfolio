import React, { Component } from 'react'
import githubPhotoProfile from '../../assets/githubprofile.png'
import githubIcon from '../../assets/github-svg.svg'
import linkedinIcon from '../../assets/linkedin-svg.svg'

export default class TextPage extends Component {
  render() {
    return (
        <div className="grid place-items-center h-screen md:flex md:justify-center">
          <div className='md:justify-center md:items-center m-5 text-center'>
            <div className='bg-white rounded py-8'>
              <div className='flex justify-center'>
                <img className='rounded-full w-32 h-32' src={githubPhotoProfile} />
              </div>
            <div className='m-5'>
                <h1 className="text-3xl text-violet-800 font-bold">I'm Adryan</h1>
                <h2 className='text-lg'>A Internet Systems student at IFPE</h2>
                <h2 className='text-lg'>Studying about Web Development</h2>
            </div>
              <div className='flex justify-center item'>
                <a href="https://github.com/Nasc1mento/"><img className="w-10 h-10 m-5" src={githubIcon}/></a>
                <a href="https://www.linkedin.com/in/adryan-reis-9940ba186"><img className="w-10 h-10 m-5" src={linkedinIcon}/></a>
              </div>
            </div>    
        </div>   
        </div> 
    )
  }
}

