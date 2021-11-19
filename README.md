https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://www.youtube.com/watch?v=EiJ2vTwrlHM&list=PLwJIrGynFq9B2H5ESc1mH5TBYSXHQksOY&index=2
```bash
# install
node
git
tsc: https://www.typescriptlang.org/download

# compiler one file
tsc src/greeter.ts --watch
# compiler any files by tscconfig.json
tsc
```
```json
// vscode debugging typescript
// Source Map Discovery
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch TypeScript",
      "type": "node",
      "request": "launch",
      "program": "app.ts",
      "outFiles": ["${workspaceFolder}/bin/**/*.js"]
    }
  ]
}
```

```bash
# packages -> common
#class-validator
https://www.npmjs.com/package/class-validator
```

# guide: https://www.youtube.com/watch?v=NS1wJBsQ9SM&list=PLKzNGvIJtUDbQk3RDWTbyo2FkezJYf0q1&index=4
```bash
npm install --save-dev nodemon
# left terminal -> compiler with tsconfig.json
tsc

# right terminal -> run nodemon
```