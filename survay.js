const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable :)', (answer) => {
  rl.prompt();
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.prompt();
    rl.question('What do you listen to while doing that?', (music) => {
      rl.prompt();
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.prompt();
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          rl.prompt();
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.prompt();
            rl.question('What is your favourite drink?', (drink) => {
              rl.prompt();
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!(Write a small paragraph)', (power) => {
                rl.prompt();
                console.log(`OK so your nickname is ${answer}? Thats dope! You also love to ${activity}??? So jealous. ${music} is probably the best kind of msuic for that activity.
                Probably builds up an appitite for ${meal}, you probably want ${food} after. Then maybe watch some ${sport} with a ${drink}. But at the end of the day youre a nerd like me and
                want to be a super hero, tell me about that again? ${power}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
