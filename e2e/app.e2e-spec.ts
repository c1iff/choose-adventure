import { RaccoonAttackQuizPage } from './app.po';

describe('raccoon-attack-quiz App', function() {
  let page: RaccoonAttackQuizPage;

  beforeEach(() => {
    page = new RaccoonAttackQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
