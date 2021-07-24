import { useCallback, useState } from 'react';

export function useCarousel({ size = 1, cycle = true }) {
   const [index, setIndex] = useState(0);

   const goBack = useCallback(
      () =>
         setIndex((is) => {
            if (is > 0) {
               return is - 1;
            }

            if (cycle) {
               return size - 1;
            }

            return is;
         }),
      [cycle, size]
   );

   const goNext = useCallback(
      () =>
         setIndex((is) => {
            if (size - 1 > is) {
               return is + 1;
            }

            if (cycle) {
               return 0;
            }

            return is;
         }),
      [cycle, size]
   );

   return {
      index,
      goBack,
      goNext,
      hasNext: cycle || index < size - 1,
      hasBack: cycle || index > 0,
   };
}
