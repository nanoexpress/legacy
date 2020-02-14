const nanoexpress = require('..');

const app = nanoexpress();

let count1 = 0;
let count2 = 0;

app.get('/hello', async () => {
  console.log(count1++);
  return 'hello';
});
app.get('/test', async () => {
  const { test } = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ test: 123 });
    }, 1);
  });
  console.log(count2++);
  return { test };
});

app.listen(8004);
