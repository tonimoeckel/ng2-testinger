import { Beta24Page } from './app.po';

describe('beta24 App', function() {
  let page: Beta24Page;

  beforeEach(() => {
    page = new Beta24Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
