// Define constants for story IDs
// Define choice IDs as constants
const Choices = {
  GO_LEFT: 'go-left',
  GO_RIGHT: 'go-right',
  TAKE_TREASURE: 'take-treasure',
  CONTINUE_EXPLORING: 'continue-exploring',
  FIGHT_DRAGON: 'fight-dragon',
  RUN_AWAY: 'run-away',
};

const story = [
  {
    id: 'start',
    title: 'Welcome to the Adventure!',
    text: 'You find yourself in a dark forest. What will you do?',
    choices: [
      {
        id: Choices.GO_LEFT,
        text: 'Go left',
        nextStoryId: 'left-path',
      },
      {
        id: Choices.GO_RIGHT,
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
        id: Choices.TAKE_TREASURE,
        text: 'Take the treasure',
        nextStoryId: 'treasure-ending',
      },
      {
        id: Choices.CONTINUE_EXPLORING,
        text: 'Continue exploring',
        nextStoryId: 'start',
      },
    ],
  },
  {
    id: 'right-path',
    title: 'The Right Path',
    text: 'You encounter a fierce dragon. What will you do?',
    choices: [
      {
        id: Choices.FIGHT_DRAGON,
        text: 'Fight the dragon',
        nextStoryId: 'dragon-ending',
      },
      {
        id: Choices.RUN_AWAY,
        text: 'Run away',
        nextStoryId: 'start',
      },
    
    ]},
  // Add more story segments as needed
  // ...
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
];

export default story;
