/**
 * This file contain tests for the flexi component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Flexi from './Flexi';
import {shallow} from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const flexiConfig1 = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField",
    },
    {
      "name": "person_other",
      "label": "Person other",
      "type": "TextField",
    }
  ]
};

const flexiConfig2 = {
  items: [
    {
      "name": "name1",
      "label": "Person's Name",
      "type": "TextField",
      "children": flexiConfig1
    },
    {
      "name": "name2",
      "label": "Person other",
      "type": "TextField",
    }
  ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Test submit event', () => {
  const mockCallBack = jest.fn();

  const flexi = shallow(<Flexi config={{items: []}} onSubmit={mockCallBack} />);
  flexi.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

it('Test normal config', () => {
  const onSubmit = jest.fn();
  const flexi = shallow(<Flexi config={flexiConfig1} onSubmit={onSubmit} />);
  flexi.find('button').simulate('click');
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      'person_name': expect.any(String),
      'person_other': expect.any(String),
    }),
  );
});

it('Test recursive config', () => {
  const onSubmit = jest.fn();
  const flexi = shallow(<Flexi config={flexiConfig2} onSubmit={onSubmit} />);
  flexi.find('button').simulate('click');
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      'person_name': expect.any(String),
      'person_other': expect.any(String),
      'name1': expect.any(String),
      'name2': expect.any(String)
    }),
  );
});

it('Receives user input', () => {
  const onSubmit = jest.fn();
  const flexi = shallow(<Flexi config={{flexiConfig1}} onSubmit={onSubmit} />);
  flexi.find('[name="person_name"]').simulate('change', {
    persist: () => null,
    target: 
      {
        name: 'person_name',
        value: 'Tom Selleck',
      }
  });
  flexi.find('button').simulate('click');
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      'person_name': expect.stringContaining('Tom Selleck')
    }),
  );
});

/**
 * Well, if you are here you value tests as much as we do
 * Try to write more tests as an added value
 */