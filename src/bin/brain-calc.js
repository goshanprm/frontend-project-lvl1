#!/usr/bin/env node
import {
  welcomeCalc, greeting, game,
} from '../engine';

welcomeCalc();

const userName = greeting();

game(userName, 'calc', 0);
