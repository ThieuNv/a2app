import { CapitalizeAllPipe } from './capitalize-all.pipe';

describe('CapitalizeAllPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeAllPipe();
    expect(pipe).toBeTruthy();
  });
});
