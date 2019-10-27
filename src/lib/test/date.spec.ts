import { formatDate } from '../date';

describe('test date', () => {
  it('formatDate should print date with year-month-day format', () => {
    const d = new Date(2000, 1, 1);
    expect(formatDate(d)).toEqual('2000-1-1!!');
  });
});
