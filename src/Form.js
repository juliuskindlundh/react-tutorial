import React, { Component } from 'react';

class Form extends Component {
    intitialState = {
          name:'',
          job:''
       };
    state = this.intitialState;

    handleChange = (event) => {
        const{name,value} = event.target
        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        this.props.handleSubmit(this.state);
        this.setState(this.intitialState);    
    }

    render() {
        const {name,job} = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label htmlFor="job">job</label>
                <input
                    type="text"
                    name="job"            
                    id="job"            
                    value={job}            
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    onClick={this.submitForm}
                    value = "Submit"/>                       
            </form>
        );
    }
}

export default Form;