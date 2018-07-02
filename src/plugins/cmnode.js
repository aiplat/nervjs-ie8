module.exports = {
  getIP: () => {
    const interfaces = require('os').networkInterfaces();
    for (const devName in interfaces) {
      const iface = interfaces[devName];
      for (const i in iface) {
        const alias = iface[i];
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal
        ) {
          return alias.address;
        }
      }
    }
  },
  getEntry: globPath => {
    const path = require('path');
    const glob = require('glob');
    const entry2 = {};

    glob.sync(globPath).forEach(function(entry) {
      const basename = path.basename(entry, path.extname(entry));
      entry2[basename] = entry;
    });

    return entry2;
  }
};
