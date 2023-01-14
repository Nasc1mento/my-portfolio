import React, { Component } from 'react'
import githubIcon from '../../assets/github-svg.svg'
import linkedinIcon from '../../assets/linkedin-svg.svg'
import adryanIcon from '../../assets/adryan.jpg'

export default class TextPage extends Component {
  render() {
    return (
        <div className="md:grid place-items-center h-screen  md:justify-center">
          <div className='md:justify-center md:items-center m-5 text-center'>
            <div className='bg-white rounded py-8'>
              <div className='flex justify-center'>
                <img className='rounded-full w-48 h-48' src={adryanIcon} />
              </div>
            <div className='m-5'>
                <h1 className="text-3xl text-violet-800 font-bold">I'm Adryan Reis</h1>
                <h2 className='text-lg'>An Internet Systems student at IFPE</h2>
                <h2 className='text-lg'>Currently studying about Web Development</h2>
            </div>
              <div className='flex justify-center item'>
                <a href="https://github.com/Nasc1mento/" target="_blank"><img className="w-10 h-10 m-5" src={githubIcon}/></a>
                <a href="https://www.linkedin.com/in/adryan-reis-9940ba186" target="_blank"><img className="w-10 h-10 m-5" src={linkedinIcon}/></a>
              </div>
            </div>    
        </div>   
        </div> 
    )
  }
}

