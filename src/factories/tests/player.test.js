import Player from '../player';

test('addMove function', () => {
  const player = Player('testplayer');
  player.addMove([0,0]);
  expect(player.addMove([0,0])).toBe(false);
});
