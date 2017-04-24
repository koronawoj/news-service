import { NewsServicePage } from './app.po';

describe('news-service App', () => {
  let page: NewsServicePage;

  beforeEach(() => {
    page = new NewsServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
