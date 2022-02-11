Please read : https://praveendavidmathew.medium.com/narrative-story-on-how-to-create-command-line-utility-project-part-1-164ce056eb90 and related stories to understand this project


# Executing the project

To run the project, 


Just navigate to corresponding project root and run

### For cjs:

```
npm install
node ./index.js -i
```
### For Typescript:

```
npm install
npx ts-node ./index.ts
```


# Running Jest test

Just navigate to corresponding project root (where package.json is present) and run

### For cjs:

```
npm install
npm run test -- --collectCoverage
```
### For Typescript:

```
npm install
npm run test -- --collectCoverage
```