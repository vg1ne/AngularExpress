import { ExpressAngularPage } from './app.po';

describe('express-angular App', () => {
  let page: ExpressAngularPage;

  beforeEach(() => {
    page = new ExpressAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
