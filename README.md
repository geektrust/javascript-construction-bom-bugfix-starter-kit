# Construction Bill of Materials Bugfix Starter Kit

## Introduction

This is a skeleton project structure which will help you start solving the problem right away.

The existing implementation contains bugs that cause incorrect construction cost calculations. Your task is to investigate the codebase, identify the root causes, and fix the implementation so that the total construction cost is calculated correctly.

You may modify the existing implementation as required, but **do not modify `src/index.js`**, as it contains the driver code.

## Tools available to you

* Node.js (v18 or above)
* `node:test` - The built-in Node.js test runner to help you write and run unit tests. No extra dependencies need to be installed.

## Structure

* **`src/index.js`** contains the driver code. **Do not modify this file.**
* **`src/houseEstimator.js`** contains the main implementation and domain models.
* **`test/`** is where all your unit test files should be written.

A typical project structure looks like:

```text
javascript-construction-bom-bugfix-starter-kit/
├── package.json
├── src/
│   ├── index.js
│   └── houseEstimator.js
├── test/
│   └── ...
└── README.md
```

## How to run unit tests

We have already configured the project to get started with writing and running unit tests.

Run the following command in the terminal:

```bash
./run_unittests.sh
```

Or run the tests directly:

```bash
npm test
```

All test files should be placed inside the `test/` folder and follow the naming convention:

```text
*.test.js
```

For example:

```text
houseEstimator.test.js
components.test.js
```

A test file looks like this:

```javascript
const test = require("node:test")
const assert = require("node:assert")
const { HouseEstimator } = require("../src/houseEstimator")

test("a single wall costs 250", () => {
    const estimator = new HouseEstimator()
    estimator.addComponent("Wall", 1)
    assert.strictEqual(estimator.calculateTotalCost(), 250)
})
```

## How to run your solution

The driver program accepts commands as command-line arguments.

For example:

```bash
./run.sh "ADD_COMPONENT Wall 1" "TOTAL_COST"
```

This should produce:

```text
Total Construction Cost: 250
```

You can pass multiple commands as separate command-line arguments:

```bash
./run.sh "ADD_COMPONENT Wall 1" "ADD_COMPONENT Roof 1" "TOTAL_COST"
```

You can also invoke the program directly with Node.js:

```bash
node . "ADD_COMPONENT Wall 1" "TOTAL_COST"
```

## Checking for correctness

You can click on the **Test My Code** button from the interview application, which will run your solution against preconfigured inputs and show the output.

You can also run the program locally with custom inputs using:

```bash
./run.sh "<input 1>" "<input 2>"
```

Each complete command should be wrapped in quotes.

For example:

```bash
./run.sh "ADD_COMPONENT Wall 1" "TOTAL_COST"
```

## Sample inputs

### Wall

```bash
./run.sh "ADD_COMPONENT Wall 1" "TOTAL_COST"
```

Expected output:

```text
Total Construction Cost: 250
```

### Roof

```bash
./run.sh "ADD_COMPONENT Roof 1" "TOTAL_COST"
```

Expected output:

```text
Total Construction Cost: 380
```

### Wall + Roof

```bash
./run.sh "ADD_COMPONENT Wall 1" "ADD_COMPONENT Roof 1" "TOTAL_COST"
```

Expected output:

```text
Total Construction Cost: 630
```

## Commands available

### `ADD_COMPONENT`

Adds a construction component.

Format:

```text
ADD_COMPONENT <Component Type> <Count>
```

Supported component types:

* `Wall`
* `Roof`
* `Floor`

Example:

```text
ADD_COMPONENT Wall 2
```

### `TOTAL_COST`

Calculates and displays the total estimated construction cost of all components added so far.

Format:

```text
TOTAL_COST
```

Example output:

```text
Total Construction Cost: 500
```

## Notes

* The existing code intentionally contains bugs.
* Investigate the existing implementation before making changes.
* Fix the root causes rather than hardcoding expected outputs.
* Existing behavior that is already correct should continue to work after your changes.
* `src/index.js` contains the driver code and should not be modified.
* You are encouraged to add unit tests to verify the behavior of individual components and the overall cost calculation.
