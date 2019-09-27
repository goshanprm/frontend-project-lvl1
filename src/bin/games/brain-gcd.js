#!/usr/bin/env node
import {
  welcomeGcd, greeting, game,
} from '../../engine';

welcomeGcd();

const userName = greeting();

game(userName, 'gcd', 0);
