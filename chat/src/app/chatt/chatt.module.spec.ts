import { ChattModule } from './chatt.module';

describe('ChattModule', () => {
  let chattModule: ChattModule;

  beforeEach(() => {
    chattModule = new ChattModule();
  });

  it('should create an instance', () => {
    expect(chattModule).toBeTruthy();
  });
});
