import readlineSync from 'readline-sync';

export const greetUser = () => console.log('Welcome to the Brain Games!\n');

export const askForName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}