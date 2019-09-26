#!/usr/bin/env node
import {
  welcomeEven, greeting, game,
} from '../engine';

welcomeEven();

const userName = greeting();

game(userName, 'even', 0);
