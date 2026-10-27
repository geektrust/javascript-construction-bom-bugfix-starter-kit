#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Run all tests using the Node.js built-in test runner
node --test test/
