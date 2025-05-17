import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders learn react link', async () => {
  // You may not need act here unless you're doing async operations
  render(<App />);

  // Make the matcher more flexible
  const linkElement = screen.getByText((content, element) => 
    element.textContent.toLowerCase().includes('learn react') // Flexible matching
  );

  expect(linkElement).toBeInTheDocument();
});
