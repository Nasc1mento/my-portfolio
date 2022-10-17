import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <section className='grid grid-cols-2 p-40'>
        <div className='md:justify-center md:items-start m-5 text-center'>            
            <div className=' bg-pink-300 rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>Memory game</h3>
                <h4 className='text-lg font-bold text-black'>JavaScript | Svelte</h4>
                <p>Jogo da memóriafdslfhlsdkjhfjsdkhfkjdhfjkhdfjkdhjkfhjk</p>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Source 
                    </button>
                </div>
            </div>    
        </div>
        <div className='md:justify-center md:items-center m-5 text-center'>
            <div className='bg-pink-300 rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>Damas</h3>
                <h4 className='text-lg font-bold text-black'>JavaScript | Svelte</h4>
                <p>Jogo de damas</p>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Source 
                    </button>
                </div>
            </div>    
        </div>
        <div className='md:justify-center md:items-center m-5 text-center'>
            <div className='bg-pink-300 rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>TicTacToe</h3>
                <h4 className='text-lg font-bold text-black'>Shell | Bash</h4>
                <p>TicTacToe game</p>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Source 
                    </button>
                </div>   
            </div>
                
        </div>
      </section>
    )
  }
}
