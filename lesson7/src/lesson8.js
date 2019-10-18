import React from 'react';
import './App.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        let text = 0;
        /* if (this.state.value === '1') {
           text = 'единица';
         }*/
        return (
            <FancyBorder color="blue">
                <form onSubmit={this.handleSubmit}>
                    {/*{text}*/}
                    {this.state.value == '' && text}
                    <label>
                        Имя:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Отправить"/>
                </form>
            </FancyBorder>
        );
    }
}
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Добро пожаловать
            </h1>
            <p className="Dialog-message">
                Спасибо, что посетили наш космический корабль!
            </p>
        </FancyBorder>
    );
}
export default NameForm;