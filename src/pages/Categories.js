import React, { Component, Fragment } from 'react';
import { getCategories } from '../services/ApiService';

class Categories extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    getCategories().then(categories => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    console.log(categories);

    return (
      <Fragment>
        <h1>Categorias</h1>
        {categories.length === 0 && 'Carregando...'}
        <div className='card-group'>
          {categories.map(category =>
            <a className='card' key={category.id} href={'/categories/' + category.id}>{category.name}</a>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Categories;
