#!/usr/bin/env node
import { getQuestion, getGreeting, getPersonalGreeting } from '../src/cli.js';

getGreeting();

const name = getQuestion('What is your name?');
getPersonalGreeting(name);
