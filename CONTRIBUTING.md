# Contributing to Iconbox

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to this repo and all other repositories in this organisation, so please take a look before starting your work.


## I want to contribue, where should I start?
We provide a bunch of issues on each repository in this organisation, so it will help you to pick the one you mostly like and 
think you could solve, then add a comment to let us know you start that issue, or assign it to you.

## Adding icon pack rules 

- All icons must have a folder inside `packages`.
- Every package must contain a package.json, just like others. (e.g [this](https://github.com/iconsbox/icons/blob/master/packages/Eid/package.json)) and should have a valid name and description and same scripts. 
- In the package.json file, it is VERY IMPORTANT to have a `owner` and `license` of that icon pack.
- An icon pack should have a `/src` folder to contains svg icons. If you are making package from some svg files, you can use[ this script](https://github.com/iconsbox/icons/blob/master/scripts/icons/makeFolderWithFileName.js) to make folder with those svg files.
