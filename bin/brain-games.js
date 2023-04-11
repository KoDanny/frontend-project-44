#!/usr/bin/env node
import getGreeting from '../src/cli.js';
import { getQuestion, getPersonalGreeting } from '../src/index.js';

getGreeting();

const name = getQuestion('What is your name?');
getPersonalGreeting(name);
