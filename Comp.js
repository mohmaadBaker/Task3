import React from "react";
class Comp extends React.Component{
    constructor(props){
        super(props)
this.state={
    array:    [{name: 'Ahmad', age: 30},
    {name: 'Yousef', age: 12},
    {name: 'Shatha', age: 14},
    {name: 'Rana', age: 22},
        {name: 'Osama', age: 22},
    {name: 'Ahmad', age: 38} ],
    arrayOfname:[],
    arrayOfage:[],
    xx: 0,
    yy:0
}
    }
NameAndAge(){

    const uniqueIds = [];
    const uniqueEmployees = this.state.array.filter(element => {
        const isDuplicate = uniqueIds.includes(element.name);
        const Ages = uniqueIds.includes(element.age);
        if (!isDuplicate && !Ages) {
          uniqueIds.push(element.name);
          uniqueIds.push(element.age)

          return true;
        }
        return false;
      });

this.state.array=uniqueEmployees;

console.log(this.state.array)
    this.state.array.map(e=>{
    const name=e.name;
       const age=e.age;
   this.setState(prev_el => (
    {
        arrayOfname: [...prev_el.arrayOfname, e.name],
        arrayOfage: [...prev_el.arrayOfage, e.age]
    }
))
    })
}
componentWillMount(){
    this.NameAndAge();
}
deletelist(){
const x=this.state.arrayOfname.pop()
const y= this.state.arrayOfage.pop()
this.setState({
    xx:x,
    yy:y,
})
}
    render(){
        return(<div>
      <ul style={{display:'inline-block'}}> {this.state.arrayOfname.map(e=><li >{e}</li>)} </ul>
      <ul style={{display:'inline-block'}}> {this.state.arrayOfage.map(e=><li >{e}</li>)} </ul>
            <div><button onClick={this.deletelist.bind(this)}> delete</button>
            </div>
            </div>)
    }
}
export default Comp
