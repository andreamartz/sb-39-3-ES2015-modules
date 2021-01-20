/**
 * This file should export two array helper functions:
 * * choice(items): returns a randomly selected item from array of itemms
 * * remove(items, item) removes the first matching item from items, if item exists, and returns it. Otherwise, returns undefined.
 */

const choice = (items) => {
  const randIdx = Math.floor(Math.random() * items.length);
  return items[randIdx];
};

const remove = (items, item) => {
  const idx = items.findIndex(i => i === item);
  if (idx === -1) {
    return undefined;
  } else {
    return items.splice(idx, 1);
  }
};

export { choice, remove };