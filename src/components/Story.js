const story = [
  {
    id: 'start',
    title: 'Welcome to the Adventure!',
    text: 'You find yourself in a dark forest. What will you do?',
    choices: [
      {
        id: 'go-left',
        text: 'Go left',
        nextStoryId: 'left-path',
      },
      {
        id: 'go-right',
        text: 'Go right',
        nextStoryId: 'right-path',
      },
    ],
  },
  {
    id: 'left-path',
    title: 'The Left Path',
    text: 'You discover a hidden treasure! What will you do now?',
    choices: [
      {
        id: 'take-treasure',
        text: 'Take the treasure',
        nextStoryId: 'treasure-ending',
      },
      {
        id: 'continue-exploring',
        text: 'Continue exploring',
        nextStoryId: 'left-path-continue',
      },
    ],
  },
  {
    id: 'left-path-continue',
    title: 'The Hidden Cave',
    text: "You find a hidden cave. It's dark and mysterious. What will you do?",
    choices: [
      {
        id: 'enter-cave',
        text: 'Enter the cave',
        nextStoryId: 'cave-ending',
      },
      {
        id: 'return-to-path',
        text: 'Return to the path',
        nextStoryId: 'left-path',
      },
    ],
  },
  {
    id: 'cave-ending',
    title: 'The Dark Cave',
    text: 'You enter the cave and discover a chest filled with riches. You are victorious!',
    choices: [],
  },
  {
    id: 'right-path',
    title: 'The Right Path',
    text: 'You encounter a fierce dragon. What will you do?',
    choices: [
      {
        id: 'fight-dragon',
        text: 'Fight the dragon',
        nextStoryId: 'dragon-ending',
      },
      {
        id: 'run-away',
        text: 'Run away',
        nextStoryId: 'right-path-run',
      },
    ],
  },
  {
    id: 'right-path-run',
    title: 'Narrow Escape',
    text: "'You narrowly escape from the dragon. You find yourself in a meadow. What's your next move?",
    choices: [
      {
        id: 'explore-meadow',
        text: 'Explore the meadow',
        nextStoryId: 'meadow-ending',
      },
      {
        id: 'return-to-path',
        text: 'Return to the forest path',
        nextStoryId: 'right-path',
      },
    ],
  },
  {
    id: 'meadow-ending',
    title: 'The Meadow Discovery',
    text: 'You discover a peaceful meadow and decide to rest. Congratulations, you have successfully completed your adventure!',
    choices: [],
  },
  {
    id: 'treasure-ending',
    title: 'Treasure Found!',
    text: 'Congratulations! You have found the hidden treasure and won the game!',
    choices: [],
  },
  {
    id: 'dragon-ending',
    title: 'Defeat',
    text: 'You bravely fought the dragon but sadly lost. Game over!',
    choices: [],
  },
  {
    id: 'no-more-choices-ending',
    title: 'Game Over',
    text: 'You have reached the end of your adventure. Thanks for playing!',
    choices: [],
  },
  // Add more story segments as needed
  // ...
];

export default story;
