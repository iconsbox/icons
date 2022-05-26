const shell = require('shelljs');

// const version = '0.2.1-alpha.canary';
const packages = [
  // '@package/helpers',
  //
];

packages.forEach((p) => {
  // const packageSigniture = `${p}@${version}`;

  // Run external tool synchronously
  if (shell.exec(`npm deprecate ${p} "Please use @snappmarket/ui instead (full tree-shakable)"`).code !== 0) {
    shell.echo(`Error: deprecate failed : ${p}`);
  }
});
