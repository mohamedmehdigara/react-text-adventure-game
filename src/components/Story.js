// Define constants for story IDs
export const STORY_IDS = {
  START: 'start',
  LEFT_PATH: 'left-path',
  RIGHT_PATH: 'right-path',
  TREASURE_ENDING: 'treasure-ending',
  DRAGON_ENDING: 'dragon-ending',
  NO_MORE_CHOICES_ENDING: 'no-more-choices-ending',
};

// Define story content separately
const storyContent = {
  [STORY_IDS.START]: {
    title: 'Welcome to the Adventure!',
    text: 'You find yourself in a dark forest. What will you do?',
    choices: [
      { id: 'go-left', text: 'Go left', nextStoryId: STORY_IDS.LEFT_PATH },
      { id: 'go-right', text: 'Go right', nextStoryId: STORY_IDS.RIGHT_PATH },
    ],
  },
  [STORY_IDS.LEFT_PATH]: {
    title: 'The Left Path',
    text: 'You discover a hidden treasure! What will you do now?',
    choices: [
      { id: 'take-treasure', text: 'Take the treasure', nextStoryId: STORY_IDS.TREASURE_ENDING },
      { id: 'continue-exploring', text: 'Continue exploring', nextStoryId: STORY_IDS.START },
    ],
  },
  [STORY_IDS.RIGHT_PATH]: {
    title: 'The Right Path',
    text: 'You encounter a fierce dragon. What will you do?',
    choices: [
      { id: 'fight-dragon', text: 'Fight the dragon', nextStoryId: STORY_IDS.DRAGON_ENDING },
      { id: 'run-away', text: 'Run away', nextStoryId: STORY_IDS.START },
    ],
  },
  // Add more story segments as needed
};

// Export the story structure
export const story = Object.entries(storyContent).map(([id, content]) => ({
  id,
  ...content,
  choices: content.choices.map((choice) => ({ ...choice })),
}));

export default story;
