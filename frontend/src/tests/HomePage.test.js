import React from 'react';
import HomePage from '../components/HomePage';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('HomePage', () => {
  test('Doit afficher : Hello from the backend', async () => {
    const mock = new MockAdapter(axios);
    const message = 'Hello from the backend';
    mock.onGet('http://localhost:3001/').reply(200, { message: message });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });
});
