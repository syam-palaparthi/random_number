import {Component} from 'react'
import './index.css'

class RandomNumber extends Component{
    state={count:0,}
    onClickButton=()=>{
        const randomNumber=Math.ceil(Math.random()*100)
        this.setState({count:randomNumber})
    }
    render(){
        const{count}=this.state
        return(
            <div className='main-container'>
            <h1 className='heading'>Random Number</h1>
            <p className='para'>Generate a random number in the range of 0 to 100</p>
            <button className='button' onClick={this.onClickButton}>Generate</button>
            <h1 className='count'>{count}</h1>
            </div> 
        )
    }
}
export default RandomNumber