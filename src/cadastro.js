import './index.css'
import mainLogo from './danger.png';
import React from 'react';

class Cadastro extends React.Component{

  state = {
    email: '',
    name:'',
    password :'',
    pass_test: '',

    error: "input"
  };

  
  readInput = (event) =>  {
    const name = event.target.name 
    const email = event.target.email
    const value = event.target.value
    const pass_test = event.target.pass_test

    this.setState({[name]:value})
  }
  

  submit = () =>{
    /* Valores lidos */
    const nome = this.state.nome
    const email = this.state.email
    const password = this.state.password
    const pass_test = this.state.pass_test

    if(pass_test == password){
        this.state.error = "input";

        /* senhas iguais */
        
    }else{
        this.state.error = "input-error";
        this.forceUpdate();
    }

    console.log('Nome',nome)
    console.log("Email",email)
    console.log('Pass',password)
    console.log('test',pass_test)
  }

  testePassowrds = () =>{
    this.state.error = "input";
  }
  

  render(){
    return(

      <div>
        <div className="position-absolute top-0 start-50 translate-middle-x">
          <img src={mainLogo} id = "logo"/>
        </div>
        
        <div className="position-absolute top-50 start-50 translate-middle" id = "card-cadastro">
          <div className="position-absolute top-50 start-50 translate-middle" >
              <form className = "vstack gap-3" id = "login" > 
                  <label >Email:</label>
                  <input onChange = {this.readInput} type="email"  name="email"  id = "input"  placeholder="Escreva seu email"/>

                  <label >Nome:</label>
                  <input onChange = {this.readInput} type="text"  name="nome" id = "input"  placeholder="Escreva seu nome" />

                  <label >Senha:</label>
                  <input onChange = {this.readInput}  onFocus = {this.testePassowrds} type="password"  name="password" id = {this.state.error}  placeholder="Escreva sua senha"/>

                  <label >Senha:</label>
                  <input onChange = {this.readInput}  onFocus = {this.testePassowrds} type="password"  name="pass_test" id = {this.state.error}  placeholder="Confirme sua senha"/>

                  <button onClick={this.submit} type="button" className="btn btn-primary" id ="button" >Acessar</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default Cadastro;
