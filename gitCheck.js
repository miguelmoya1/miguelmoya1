'use strict';

const { exec } = require('child_process');
const { existsSync } = require('fs');

const args = process.argv.slice(2);
const url = args[0];

const syncExec = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, info) => {
      if (err) {
        reject(err);
      }
      resolve(info);
    });
  });
};

(async () => {
  if (args.length === 0) {
    console.error('Error: Param required.');
    return 1;
  }

  if (url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)) {
    const folder = url.split('/').slice(-1)[0].replace('.git', '');
    if (!existsSync(folder)) {
      console.log(`CLONING REPOSITORY: ${url}`);
      await syncExec(`git clone ${url}`);
    } else {
      console.log('NOT NECESARY TO CLONE...');
    }
    console.log(`GIT STASH... (${folder})`);
    await syncExec(`cd ${folder} && git stash`);

    console.log(`GIT PULL... (${folder})`);
    await syncExec(`cd ${folder} && git pull`);

    console.log(`GIT STASH CLEAR... (${folder})`);
    await syncExec(`cd ${folder} && git stash clear`);

    console.log('DONE...');
  } else {
    console.error('Error: Param is not a url.');
  }
})();
