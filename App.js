import './App.css';

import React from 'react';
import Comp from './Comp';
class App extends React.Component{
// eslint-disable-next-line no-useless-constructor
constructor(props){
super(props)
}
render() {
  return (
    <div>
<Comp/>
    </div>
  );
}
}
export default App;
// function Component1(props){
//   let f=props.deleteTwolist
// return(
// <div >
// {props.array.map((iteam,index)=>{
// return(<ul className='list'>
//   <li key={index}>Names: {iteam.name},
//   </li>
//   <li key={Math.random()}> Ages: {iteam.age}</li>
//   </ul>)
// })}
// {f}
// </div>
// )

// }
// function deleteTwolist(props){
//   props.array.map((iteam,index)=>{
//     return(
//      iteam.splice(index)
//     )
//   })
// }
// function App() {
//   return (
//     <div>
// <Component1 array={[{name: 'Ahmad', age: 30},
// {name: 'Yousef', age: 12},
// {name: 'Shatha', age: 14},
// {name: 'Rana', age: 22},
// {name: 'Osama', age: 22},
// {name: 'Ahmad', age: 38} ]} />
// <button onClick={deleteTwolist} > delete the </button>
//     </div>
//   );
// }

// import {Component} from 'react'
// import './App.css';
// const Component1=(props)=>{
// return(
//   <div >
// {props.array.map((iteam,index)=>{
//   return(<ul >
//     <li key={index}>name:{iteam.name} </li>
//     <li key={Math.random()}>,age:{iteam.age} </li>
//     </ul>)
// })}
//   </div>
// )
// }

// class App extends Component{
// constructor(props){
//   super(props)
//   this.state={
// ge:"ds"
//   }
// }
// deletelist=()=>{
  
//   }

// render(){
//   return(<div>
//    <Component1 array={[{name: 'Ahmad', age: 30},
//    {name: 'Yousef', age: 12},
//    {name: 'Shatha', age: 14},
//    {name: 'Rana', age: 22},
//    {name: 'Osama', age: 22},
//    {name: 'Ahmad', age: 38} ]}/>
//     <button onClick={this.deletelist}>delete </button>
    
    
//     </div>

//   )

// }
// }
// export default App;
// return(<h2 key={index} > {iteam.name} {iteam.age}</h2>)