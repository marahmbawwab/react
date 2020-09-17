import React from 'react';
import './App.css';

class Myform extends React.Component {
  constructor(props){
    super(props);
    this.state = {username:null ,
      password:null 
    }
    this.handleuser=this.handleuser.bind(this);
  }
  handleuser(event){
    if(event.target.value !== ""){
      this.setState({username:event.target.value});
    }
    else {
      this.setState({username:null});
    }
  }
 handlepass=(event)=>{
   //if(event.target.name==="myuser"){
    if(event.target.value !== ""){
     this.setState({password:event.target.value});
    }
    else {
      this.setState({password:null});
    }
 }
  handleClick=()=>{
    var str1 = "User Name:" + this.state.username ;
    var str2 = " , Password:"+this.state.password ;
    var res = str1.concat(str2);
    return alert (res);
  }
  render(){
    return (
      <div style={{margin : "50px", display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{margin:"5px" ,display:"flex", flexDirection:"row" }}>
        <label for="user" style={{width:"100px"}}><b>User Name:</b></label>
        <input type="text"  name="myuser" onChange={this.handleuser} style={{borderRadius:"7px",height:"20px"}}/>
      </div>
      <div style={{margin:"5px" ,display:"flex", flexDirection:"row" }}>
        <label for="pass" style={{width:"100px"}}><b>Password :</b></label>
        <input type="password" onChange={this.handlepass}  name="mypass" style={{borderRadius:"7px",height:"20px"}}/>
      </div>
      <div style={{alignSelf:"flex-start"}}>
        <button style={{borderRadius:"8px",height:"30px",width:"60px"}} onClick={this.handleClick}>LOGIN</button>
      </div>
      </div>
    );
  }
}



class Page extends React.Component {
  
  render(){
    return (
      <div style={{height:"100vh",backgroundColor:"rgb(111,111,146)",display:"flex",flexDirection:"column"/*justifyContent:"center",alignItems:"center"*/}} >
     <p style={{textAlign:"center",color:"rgb(255,226,226)",fontSize:"50px",fontWeight:"bold"}}>Welcome To Our Website</p>
     <div style={{alignSelf:"center",backgroundColor:"white",borderRadius:"20px",width:"600px",height:"250px",flexDirection:"row",display:"flex"}}>
      <img  src={require('./rabbit.jpg')}  alt="no-display" width="100px" height="100px" style={{borderRadius:"50%",margin:"50px"}}/>
      <Myform />
     </div>
     </div>
    );
    }
  }

export default Page;

