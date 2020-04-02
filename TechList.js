import React, { Component } from 'react';
import TechItem from './TechItem'
import PropTypes from 'prop-types'



//Método de importção de classe para compodentes
class TechList extends Component {
    static defalutProps = {
        teste: 'teste'
    }

    static propTypes = {
        teste: PropTypes.string
    }


    state = {

        newTech: '',

        techs: []
    };

    //ciclo de vida
    //executado assim que o componente aoarece em dela
    componentDidMount() {
        console.log(this.props.teste)
    }


    //executado sempre que houver alteração nas props ou estado
    componentDidUpdate(prevProps, prevState) {
        //prevProps, prevState - propriedades antigas
        //this.props, this.state - novas propriedades
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }
    }


    //executado quando o componente deixa de existir
    componentWillMount() {
        const techs = localStorage.getItem('techs')
        if (techs) {
            this.setState({
                techs: JSON.parse(techs)
            });

        }
        console.log(this.props.teste)
    }

    inputChange = event => {

        this.setState({ newTech: event.target.value })

        //console.log(this.props.teste)//Propriedades inportadas da classe
    }

    setValueChange = event => {
        event.preventDefault();

        if (this.state.newTech.length === 0) {
            return false;
        }

        this.setState({
            techs: [... this.state.techs, this.state.newTech],
            newTech: ''
        });

    }

    removeTech = index => {
        let techsA = this.state.techs;
        techsA.splice(index, 1);
        this.setState({ techs: [...techsA] });
    }




    //A criação do metodo render() é obrigatório
    render() {
        return (


            <form onSubmit={this.setValueChange}>

                <h1>{this.state.novoValor}</h1>
                <ul>
                    {this.state.techs.map((item, index) => <TechItem key={index} item={item} onDelete={() => this.removeTech(index)} />)}

                </ul>
                <input type="text" onChange={this.inputChange} value={this.state.newTech} />
                <button type="submit">Enviar</button>

            </form>


        )
    }

}

export default TechList;
