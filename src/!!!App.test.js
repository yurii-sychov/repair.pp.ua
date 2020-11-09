import { render, screen } from '@testing-library/react';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
