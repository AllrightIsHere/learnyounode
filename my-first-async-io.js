const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;

  const total = data.toString('utf8').split('\n').length - 1;

  console.log(total);
});
