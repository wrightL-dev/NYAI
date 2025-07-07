function generatePrompt() {
  const pick = (arr) => {
    const seed = Date.now() + Math.random() * 1000;
    const index = Math.floor(seed % arr.length);
    return arr[index];
  };

  const intros = ["Tell me about", "Help me explore"];

  const nouns = ["impacts", "causes"];

  const adjectives = ["modern"];

  const subjects = ["economic models", "AI development"];

  const qualifiers = ["in the 21st century"];

  const intro = pick(intros);
  const noun = pick(nouns);
  const adj = pick(adjectives);
  const subject = pick(subjects);
  const qualifier = pick(qualifiers);

  return `${intro} some ${noun} of ${adj} ${subject} ${qualifier}.`;
}

function generateComment() {
  const pick = (arr) => {
    const seed = Date.now() + Math.random() * 1000;
    const index = Math.floor(seed % arr.length);
    return arr[index];
  };
  const intros = ["I think", "I feel like"];

  const nouns = ["the response"];

  const adjectives = [
    "clearer",
    "professionally written"
  ];

  const subjects = ["thanks to how it"];

  const qualifiers = [
    "addresses the question directly.",
    "uses better examples."
  ];

  const intro = pick(intros);
  const noun = pick(nouns);
  const adj = pick(adjectives);
  const subject = pick(subjects);
  const qualifier = pick(qualifiers);

  return `${intro}, ${noun} is ${adj} ${subject} ${qualifier}`;
}

module.exports = {
  generatePrompt,
  generateComment
};
