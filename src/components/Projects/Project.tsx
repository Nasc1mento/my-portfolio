import {Component} from 'react';

interface   ProjectProps {
    title: string;
    description: string;
    link: string;
    demo?: string;
}

export default class Project extends Component <ProjectProps> {
    render() {
        const { title, description, link } = this.props;
        return (
            <div className='justify-center items-center m-5 text-center'>
                <div className='bg-white rounded py-8'>
                    <h3 className='text-xl text-violet-800 font-bold'>{title}</h3>
                    <h4 className='text-lg font-bold text-black'>{description}</h4>
                    <div className='flex space-x-2 justify-center m-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            Source
                        </a>
                    </button>
                    {this.props.demo && (
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500'>
                            <a href={this.props.demo} target='_blank' rel='noopener noreferrer'>
                                Demo
                            </a>
                        </button>
                    )}
                    </div>
                </div>
            </div>
        );
    }
} 