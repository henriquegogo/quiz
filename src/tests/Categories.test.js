import React from 'react';
import { shallow } from 'enzyme';
import { Categories } from '../pages/Categories';

describe('Categories', () => {
  let component, dispatch, categories;

  beforeEach(() => {
    categories = [
      { id: 9, name: "General Knowledge"},
      { id: 10, name: "Entertainment: Books"}
    ];
    dispatch = jest.fn();
    component = shallow(
      <Categories categories={categories} dispatch={dispatch} />
    );
  });

  it('renderize properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('requests categories from api', () => {
    expect(dispatch).toHaveBeenCalled();
  });

  it('list categories from api', () => {
    expect(component.find('.card').length).toBe(2);
    expect(component.find('.card').children().first().text()).toBe('General Knowledge');
    expect(component.find('.card').children().last().text()).toBe('Entertainment: Books');
  });
});
