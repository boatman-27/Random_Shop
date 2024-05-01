export function shrinkText(text) {
  let words = text.split(" ");
  let shortenedText = "";
  const desiredLength = words.length > 24 ? words.length / 2 : words.length;
  if (words.length > 15) {
    words = words.slice(0, desiredLength);
    shortenedText = words.join(" ");
    shortenedText += "...";
    return shortenedText;
  } else {
    return text;
  }
}
