import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this); //permet de faire en sorte que this se réferre par rapport à la classe
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) { //quand l'utilisateur remplit le username dans le formulaire, ça va appeler cette fonction
        this.setState({
            username: e.target.value //le target c'est la textbox et la value est la valeur que l'utilisateur entre
        });
    }

    onSubmit(e){
        e.preventDefault(); //empêche le formulaire d'être envoyé par défaut (si les cases sont vides)

        const user = {
            username: this.state.username
        }
    
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState ({
            username: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Create new exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                        className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create exercise log</button>
                    </div>
                </form>
            </div>
        )
    }
}
