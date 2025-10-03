import { render } from '@testing-library/react';
import React from 'react';

test('renders hello world', () => {
  const { getByText } = render(React.createElement('div', null, 'Hello World'));
  expect(getByText('Hello World')).toBeInTheDocument();
});