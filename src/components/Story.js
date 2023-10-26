const story = [
  {
    id: 'start',
    title: 'Welcome to the Adventure!',
    text: 'You find yourself in a dark forest. What will you do?',
    description: 'The moonlight barely filters through the dense canopy of trees. Eerie sounds echo in the distance.',
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
    description: 'A glimmering chest adorned with intricate engravings emerges from the undergrowth.',
    choices: [
      {
        id: 'take-treasure',
        text: 'Take the treasure',
        nextStoryId: 'treasure-ending',
      },
      {
        id: 'continue-exploring',
        text: 'Continue exploring',
        nextStoryId: 'start',
      },
    ],
  },
  {
    id: 'right-path',
    title: 'The Right Path',
    text: 'You encounter a fierce dragon. What will you do?',
    description: "The dragon's eyes burn with a fiery intensity, and its scales shimmer ominously.",
    choices: [
      {
        id: 'fight-dragon',
        text: 'Fight the dragon',
        nextStoryId: 'dragon-ending',
      },
      {
        id: 'run-away',
        text: 'Run away',
        nextStoryId: 'start',
      },
    ],
  },
  {
    id: 'treasure-ending',
    title: 'Treasure Found!',
    text: 'Congratulations! You have found the hidden treasure and won the game!',
    description: 'The chest reveals its secrets, and you bask in the glow of your newfound wealth.',
    choices: [],
  },
  {
    id: 'dragon-ending',
    title: 'Defeat',
    text: 'You bravely fought the dragon but sadly lost. Game over!',
    description: "The dragon's fiery breath overwhelms you, and the forest falls silent in your defeat.",
    choices: [],
  },
  {
    id: 'no-more-choices-ending',
    title: 'Game Over',
    text: 'You have reached the end of your adventure. Thanks for playing!',
    description: 'Your journey has come to an end, but many more stories await.',
    choices: [],
  },
  // Add more story segments as needed with narrative attributes, images, and consequences
];

export default story;
