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
# TO intall this project as commandline utility:

Just run below command from root for cjs

```
npm install -g
printer
```


Just run below command from root (where package.json is present) for typescript

```
npx tsc
npm install -g
printer
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