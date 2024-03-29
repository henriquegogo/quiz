import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from '../actions/categories';

export class Categories extends Component {

  componentDidMount() {
    this.props.dispatch(categories());
  }

  render() {
    const { categories } = this.props;

    return (
      <Fragment>
        <h1>Categories</h1>
        {categories.length === 0 && 'Loading...'}
        <div className='card-group'>
          {categories.map(category =>
            <Link className='card' key={category.id} to={'/trivia/' + category.id}>{category.name}</Link>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect(({ categories }) => categories)(Categories);
