import Game from '../Game';

test('should return object class PlayingField', () => {
  expect(new Game()).toBeInstanceOf(Game);
});
