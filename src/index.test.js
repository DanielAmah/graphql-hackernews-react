/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";

import Index from './index.js';

it('renders without crashing', () => {
  expect(JSON.stringify(
    Object.assign({}, Index, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot();
})
