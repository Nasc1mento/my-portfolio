import { Component } from 'react'
import Project from './Project'

export default class List extends Component {
  render() {
    return (
      <div className='md:grid md:grid-cols-2 md:p-40'>
        <Project
            title='AWLSearch'
            description='Java'
            link='https://github.com/Nasc1mento/TrieSearchGUI'
        />
        <Project
            title='OOPSocial-RealTimeChat'
            description='Java'
            link='https://github.com/Nasc1mento/OOPSocial-RealTimeChat'
        />
        <Project
            title='TicTacToe Resizable'
            description='Shell | Bash'
            link='https://github.com/Nasc1mento/TicTacToeBash'
            demo='https://replit.com/@fallen-of-albaz/TicTacToeBash?v=1'
        />
        <Project
            title='Damas'
            description='JavaScript | Svelte'
            link='https://github.com/Nasc1mento/DamasSvelte'
            demo='https://damas-nasc1mento.netlify.app/'
        />
        <Project
            title='ToDoList'
            description='PHP'
            link='https://github.com/Nasc1mento/ToDoList'
        />
        <Project
            title='Memory game'
            description='JavaScript | Svelte'
            link='https://github.com/Nasc1mento/JogoDaMemoria'
        />
      </div>
      
    )
  }
}
