import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; 

describe('App Component Tests', () => {
  test('renders GetToDoItem component', () => {
    render(<App />);
    const textElement = screen.getByText('My To Do Items');
    expect(textElement).toBeInTheDocument();
  });
});