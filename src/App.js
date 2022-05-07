import './index.css'
import mainLogo from './danger.png';
import React from 'react';

class App extends React.Component{

  state = {
    email: '',
    password :''
  };

  readInput = (event) =>  {
    const name = event.target.name  
    const value = event.target.value
    this.setState({[name]:value})
  }

  submit = () =>{
    const email = this.state.email
    const password = this.state.password
    console.log('Email',email)
    console.log('Pass',password)
  }
  render(){
    return(

      <div>
        <div class="position-absolute top-0 start-50 translate-middle-x">
          <img src={mainLogo} id = "logo"/>
        </div>
        
        <div class="position-absolute top-50 start-50 translate-middle" id = "card">
          <div class="position-absolute top-50 start-50 translate-middle" >
              <form class = "vstack gap-3" id = "login" > 
                  <label for="User">Nome:</label>
                  <input onChange = {this.readInput} type="text"  name="email"  id = "input"/>
                  <label for="Pass">Senha:</label>
                  <input onChange = {this.readInput} type="password"  name="password" id = "input"/>
                  <button onClick={this.submit} type="button" class="btn btn-primary" id ="button" >Acessar</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
