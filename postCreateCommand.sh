# in devcontainer.json put below code
# "postCreateCommand": "sh ./postCreateCommand.sh",

echo "start"
echo "npm version:"
npm --version
echo "typesript version:"
tsc --version

touch package.json
echo '{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "ts-node src/main.ts",
    "build": "tsc",
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^29.0.0",
    "@types/node": "^18.7.14",
    "jest": "^28.1.3",
    "nodemon": "^2.0.19",
    "ts-jest": "^28.0.8",
    "ts-node": "^10.9.1",
    "typescript": "^4.8.2"
  }
}' > package.json

touch tsconfig.json
echo '{
    "compilerOptions": {
        "lib": ["es2016", "dom", "es2017"],
        "target": "ES2015",
        "outDir": "dist",
        "sourceMap": true,
        "esModuleInterop": true,
        "moduleResolution": "node",
    },
    "include": ["./src/"],
    "exclude": ["./dist/","./src/__tests__/"]
}' > tsconfig.json

touch jest.config.js
echo 'module.exports = {
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
};
' > jest.config.js

# npm install -D typescript
# npm install -D ts-node nodemon @types/node
# npm install -D jest ts-jest @types/jest
npm install


mkdir src
touch ./src/main.ts
mkdir ./src/__tests__
touch ./src/__tests__/main.test.ts
mkdir dist

# https://titangene.github.io/article/jest-typescript.html

