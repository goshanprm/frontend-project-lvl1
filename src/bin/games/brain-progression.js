#!/usr/bin/env node
import {
  welcomeProgression, greeting, game,
} from '../../engine';

welcomeProgression();

const userName = greeting();

game(userName, 'progression', 0);
