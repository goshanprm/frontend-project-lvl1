#!/usr/bin/env node
import {
  welcomePrime, greeting, game,
} from '../../engine';

welcomePrime();

const userName = greeting();

game(userName, 'prime', 0);
