let nextEnemySpot = enemies => {
  let enemySpots = GAME_WIDTH / ENEMY_WIDTH - 1;
  let spotsTaken = [false, false, false, false, false, false, false];
  enemies.forEach(enemy => {
    spotsTaken[enemy.spot] = true;
  });
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};
