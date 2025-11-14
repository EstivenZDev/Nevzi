import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonBlack from '@/components/ButtonBlack/ButtonBlack';

describe('Button', () => {
  test('renderiza con el texto correcto', () => {
    render(<ButtonBlack content="Click me" />);
    expect(screen.getByRole('button', { name: /Click me/i })).toBeInTheDocument();
  });

  test('dispara onClick al hacer clic', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<ButtonBlack content="Click me" onClick={handleClick} />);
    await user.click(screen.getByRole('button', { name: /Click me/i }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

});
