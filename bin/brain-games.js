#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getGameGreeting from '../src/cli.js';

getGameGreeting();
const userName = readlineSync.question(`${'May I have your name?'} `);
console.log(`${'Hello'}, ${userName}!`);
