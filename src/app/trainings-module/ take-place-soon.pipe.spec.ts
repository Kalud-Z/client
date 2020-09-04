import { TakePlaceSoonPipe } from './take-place-soon.pipe';
import {addDays, format, startOfToday} from 'date-fns';


//it add a number of days to today
function nowAndXDaysDate(days: number): Date {
  return addDays(startOfToday(), days );
}


function nowAndXDays(days: number): string {
  return format(nowAndXDaysDate(days), 'yyyy-mm-dd')
}

describe('Pipe: TakePlaceSoonPipe', () => {
  let pipe: TakePlaceSoonPipe;
  beforeEach(() => { pipe = new TakePlaceSoonPipe() });

  describe('with default soon', () => {
    // it('should return true for today', () => {
    //   const takePlaceSoon = pipe.transform(nowAndXDays(0));
    //   expect(takePlaceSoon).toBe(true);
    // });
    it('should return false for yesterday', () => {
      const takePlaceSoon = pipe.transform(nowAndXDays(-1));
      expect(takePlaceSoon).toBe(false);
    });
    // it('should return true for 7 days ahead', () => {
    //   const takePlaceSoon = pipe.transform(nowAndXDays(7));
    //   expect(takePlaceSoon).toBe(true);
    // });
    it('should return false for 8 days ahead', () => {
      const takePlaceSoon = pipe.transform(nowAndXDays(8));
      expect(takePlaceSoon).toBe(false);
    });
  });

  // describe('with custom soon', () => {
  //   it('should return true for today with 0', () => {
  //     const takePlaceSoon = pipe.transform(nowAndXDays(0) , 0);
  //     expect(takePlaceSoon).toBe(true);
  //   });
  //   it('should return true for today with 1', () => {
  //     const takePlaceSoon = pipe.transform(nowAndXDays(0) , 1);
  //     expect(takePlaceSoon).toBe(true);
  //   });
  //   it('should throw with -1', () => {
  //     let illegalCall = () =>  pipe.transform(nowAndXDays(0), -1) ;
  //     expect(illegalCall).toThrow();
  //   });
  // });

  describe('with date as parameter', () => {
    it('should return true for today', () => {
      const takePlaceSoon = pipe.transform(nowAndXDays(0));
      expect(takePlaceSoon).toBe(true);
    });
    it('should return false for yesterday', () => {
      const takePlaceSoon = pipe.transform(nowAndXDays(-1));
      expect(takePlaceSoon).toBe(false);
    });
  });

  // describe('with invalid data', () => {
  //   it('should throw with non-date', () => {
  //     let illegalCall = () => { pipe.transform(undefined, -1) };
  //     expect(illegalCall).toThrow();
  //   });
  // });
});


