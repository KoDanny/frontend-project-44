#!/usr/bin/env node
import getGreeting from '../src/cli.js';
import { getPersonalGreeting } from '../src/index.js';

getGreeting();
getPersonalGreeting('What is your name?');
