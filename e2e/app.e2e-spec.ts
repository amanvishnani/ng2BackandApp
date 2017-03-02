import { BackandAppPage } from './app.po';

describe('backand-app App', function() {
  let page: BackandAppPage;

  beforeEach(() => {
    page = new BackandAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
