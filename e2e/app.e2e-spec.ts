import { EmpeekPage } from './app.po';

describe('empeek App', () => {
  let page: EmpeekPage;

  beforeEach(() => {
    page = new EmpeekPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
