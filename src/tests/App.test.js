import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('App renderize properly', () => {
	const component = shallow(<App />);

	expect(component).toMatchSnapshot();
});
