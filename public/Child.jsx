import React from "react";

class Child extends React.Component {
  constructor(props){
     
    super(props);
    console.log("constructor was called");

    this.state={
      on:false
    }
  
  }

  componentDidMount(){
    console.log("componentDidMount was called");
  }
      
  componentDidUpdate(){
    console.log("componentDidUpdate was called");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount was called");
  }

   render () {
     
     console.log("render was called");

   return <div>

       <button onClick={
             
             ()=>{
             
                if(this.setState.on===true){
                  this.setState({on:false})
                }
                
                else{
                  this.setState({on:true})
                }

             }
          
       }>

       click
       </button>


   </div>
  }


}

export default Child;