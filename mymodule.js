const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, data) => {
    if (err) return callback(err);

    callback(
      null,
      data.filter((file) => path.extname(file) === `.${ext}`)
    );
  });
};
