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
    description: 'The dragon\'s eyes burn with a fiery intensity, and its scales shimmer ominously.',
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
    description: 'The dragon\'s fiery breath overwhelms you, and the forest falls silent in your defeat.',
    choices: [],
  },
  {
    id: 'no-more-choices-ending',
    title: 'Game Over',
    text: 'You have reached the end of your adventure. Thanks for playing!',
    description: 'Your journey has come to an end, but many more stories await.',
    choices: [],
  },
  {
    id: 'magic-bridge',
    title: 'The Magic Bridge',
    text: 'You stumble upon a shimmering bridge that seems to lead to another world. What will you do?',
    description: 'The bridge is bathed in an otherworldly light, and a soft melody fills the air.',
    choices: [
      {
        id: 'cross-bridge',
        text: 'Cross the bridge',
        nextStoryId: 'enchanted-forest',
      },
      {
        id: 'avoid-bridge',
        text: 'Avoid the bridge',
        nextStoryId: 'start',
      },
    ],
  },
  {
    id: 'enchanted-forest',
    title: 'The Enchanted Forest',
    text: 'You step into an enchanted forest filled with mythical creatures. What will you do?',
    description: "The forest is alive with colors and wonders you've never seen before.",
    choices: [
      {
        id: 'befriend-creatures',
        text: 'Befriend the creatures',
        nextStoryId: 'forest-alliance',
      },
      {
        id: 'explore-alone',
        text: 'Explore alone',
        nextStoryId: 'lost-in-forest',
      },
    ],
  },
  {
    id: 'forest-alliance',
    title: 'An Alliance Forged',
    text: 'The creatures of the forest pledge their support to you. What will you do with your newfound allies?',
    description: 'The creatures offer you gifts and promise to assist you on your journey.',
    choices: [
      {
        id: 'seek-treasure',
        text: 'Seek hidden treasures',
        nextStoryId: 'treasure-hunt',
      },
      {
        id: 'challenge-dragon',
        text: 'Challenge the dragon',
        nextStoryId: 'dragon-battle',
      },
    ],
  },
  {
    id: 'lost-in-forest',
    title: 'Lost in the Enchanted Forest',
    text: "The forest is vast, and you've lost your way. What will you do to find your path?",
    description: 'The enchantment of the forest is disorienting, and the path you came from is nowhere to be found.',
    choices: [
      {
        id: 'ask-creatures',
        text: 'Ask the creatures for directions',
        nextStoryId: 'found-path',
      },
      {
        id: 'keep-wandering',
        text: 'Keep wandering',
        nextStoryId: 'no-more-choices-ending',
      },
    ],
  },
  {
    id: 'treasure-hunt',
    title: 'Treasure Hunt',
    text: 'The creatures guide you to a hidden treasure. What treasures lie in wait?',
    description: 'The treasure is said to be guarded by mythical beasts and hidden puzzles.',
    choices: [
      {
        id: 'brave-challenges',
        text: 'Brave the challenges',
        nextStoryId: 'treasure-found',
      },
      {
        id: 'return-to-forest',
        text: 'Return to the forest',
        nextStoryId: 'forest-alliance',
      },
    ],
  },
  {
    id: 'treasure-found',
    title: 'Legendary Treasure',
    text: "You've conquered the challenges and found the legendary treasure!",
    description: "The treasure reveals its true form, and you're hailed as a legend throughout the land.",
    choices: [],
  },
  {
    id: 'dragon-battle',
    title: 'The Ultimate Showdown',
    text: 'You and your forest allies face off against the dragon. Will you emerge victorious?',
    description: 'The dragon roars as it prepares to unleash its fiery wrath.',
    choices: [
      {
        id: 'strategize-battle',
        text: 'Strategize the battle',
        nextStoryId: 'dragon-victory',
      },
      {
        id: 'fight-bravely',
        text: 'Fight bravely',
        nextStoryId: 'dragon-defeat',
      },
    ],
  },
  {
    id: 'dragon-victory',
    title: 'Victory Over the Dragon',
    text: 'With a coordinated effort, you and your allies defeat the dragon and safeguard the forest!',
    description: "The dragon's defeat marks a turning point in your adventure.",
    choices: [],
  },
  {
    id: 'dragon-defeat',
    title: 'Defeat by the Dragon',
    text: 'Despite your courage, the dragon proves too powerful. Your journey comes to a tragic end.',
    description: 'Your bravery will be remembered in the annals of history.',
    choices: [],
  },
  // Add more story segments as needed with narrative attributes, images, and consequences
];

export default story;