import { fireEvent, render, screen } from '@testing-library/react';
import { useCarousel } from './use-carousel';

function UsesCarousel({ size = 2, cycle = true }) {
   const { index, goBack, goNext, hasBack, hasNext } = useCarousel({
      size,
      cycle,
   });
   return (
      <div>
         <div data-testid={'current'}>Current={index}</div>
         <button data-testid={'goBack'} onClick={goBack} disabled={!hasBack} />
         <button data-testid={'goNext'} onClick={goNext} disabled={!hasNext} />
      </div>
   );
}

describe('use-carousel', () => {
   it('is zero based index', () => {
      render(<UsesCarousel />);

      expect(screen.getByTestId('current')).toHaveTextContent('Current=0');
   });

   it('moves to next index', () => {
      render(<UsesCarousel />);
      fireEvent.click(screen.getByTestId('goNext'));
      expect(screen.getByTestId('current')).toHaveTextContent('Current=1');
   });

   it('cycles indices', () => {
      render(<UsesCarousel size={5} />);

      fireEvent.click(screen.getByTestId('goBack'));
      expect(screen.getByTestId('current')).toHaveTextContent('Current=4');
   });

   it('can disable cycling', () => {
      render(<UsesCarousel size={2} cycle={false} />);

      expect(screen.getByTestId('goBack')).toBeDisabled();
      expect(screen.getByTestId('goNext')).not.toBeDisabled();

      fireEvent.click(screen.getByTestId('goNext'));

      expect(screen.getByTestId('goBack')).not.toBeDisabled();
      expect(screen.getByTestId('goNext')).toBeDisabled();
   });
});
