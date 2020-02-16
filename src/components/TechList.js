import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  // static propTypes = {
  //    propriedade: PropTypes.tipo.validação;
  // };

  // static defaultProps = {
  //   propriedade: 'valor default'
  // };

  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que existir alterações nas props ou state
  //componentDidUpdate(prevProps, prevState) {
  componentDidUpdate(_, prevState) {
    // this.props, this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {
    // remover listeners criados pelo próprio componente é um bom caso de uso.
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '' });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(filterTech => filterTech !== tech )});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>{this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
            ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;