let delay = 100;
const animations = ['|', '/', '-', '\\', '|'];
for (let i = 0; i < animations.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + animations[i] + '  ');
  }, delay);
  delay += 200;
}
setTimeout(() => process.stdout.write('\n'), delay);