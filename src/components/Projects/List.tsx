import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className='grid grid-cols-2 p-40'>
        <div className='justify-center items-start m-5 text-center'>            
            <div className='bg-white rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>Memory game</h3>
                <h4 className='text-lg font-bold text-black'>JavaScript | Svelte</h4>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        Source
                    </button>
                </div>
            </div>    
        </div>
        <div className='justify-center items-center m-5 text-center'>
            <div className='bg-white rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>TicTacToe</h3>
                <h4 className='text-lg font-bold text-black'>Shell | Bash</h4>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href="https://github.com/Nasc1mento/TicTacToeBash">Source</a>
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href="https://replit.com/@AdryanReis/TicTacToeBash?v=1">Demo</a>
                    </button>
                </div>   
            </div>    
        </div>
        <div className='justify-center items-center m-5 text-center'>
            <div className='bg-white rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>Damas</h3>
                <h4 className='text-lg font-bold text-black'>JavaScript | Svelte</h4>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href="https://github.com/Nasc1mento/DamasSvelte">Source</a>  
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href="https://damas-nasc1mento.netlify.app/">Demo</a>
                    </button>
                </div>
            </div>    
        </div>
        <div className='justify-center items-center m-5 text-center'>
            <div className='bg-white rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>ToDoList</h3>
                <h4 className='text-lg font-bold text-black'>PHP</h4>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href="https://github.com/Nasc1mento/ToDoList">Source</a>
                    </button>
                </div>   
            </div>    
        </div>
        <div className='justify-center items-center m-5 text-center'>
            <div className='bg-white rounded py-8'>
                <h3 className='text-xl text-violet-800 font-bold'>SimpleCalculator</h3>
                <h4 className='text-lg font-bold text-black'>JavaScript | Svelte</h4>
                <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href="">Source</a>
                    </button>
                </div>   
            </div>    
        </div>
      </div>
    )
  }
}
