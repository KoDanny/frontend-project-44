#!/usr/bin/env node
import { getQuestion, getGreeting, getPersonalGreeting } from '../src/cli.js';

getGreeting('Welcome to the Brain Games!');

const name = getQuestion('What is your name?');
getPersonalGreeting(name);
