import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories } from '../actions/categories';
import { getCategories } from '../services/ApiService';

class Categories extends Component {
  componentDidMount() {
    getCategories().then(categories => this.props.dispatch(setCategories(categories)));
  }

  render() {
    const { categories } = this.props;

    return (
      <Fragment>
        <h1>Categorias</h1>
        {categories.length === 0 && 'Carregando...'}
        <div className='card-group'>
          {categories.map(category =>
            <Link className='card' key={category.id} to={'/categories/' + category.id}>{category.name}</Link>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect(({ categories }) => categories)(Categories);
