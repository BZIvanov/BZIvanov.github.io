# Typescript

Learning materials related to TypeScript.

## Installation

Run the below command to install typescript.

```
npm install -g typescript
```

After the installation you can run file by navigating to the file's folder and run the following:

```
tsc my-file-name.ts
```

And js file will be generated for you, which you can use.

In case you get ES version error, run with the below command. This can happen if you are using newer ecmascript features.

```
tsc --target es6 my-file.ts
```
