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
    techs: [
      'NodeJS',
      'ReactJS',
      'ReactNative',
    ]
  };

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
            <TechItem />
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