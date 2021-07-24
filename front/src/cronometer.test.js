import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Crono from './cronometer';

test('exist the buttons on, pause & off', () => {
    render(<Crono />);
    const onButton = screen.getByText(/On/i)
    const pauseButton = screen.getByText(/Pause/i)
    const offButton = screen.getByText(/Off/i)
    expect(onButton).toBeInTheDocument();
    expect(pauseButton).toBeInTheDocument();
    expect(offButton).toBeInTheDocument();
  });