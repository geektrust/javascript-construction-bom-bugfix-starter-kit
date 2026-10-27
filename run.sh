#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if arguments are passed
if [ "$#" -eq 0 ]; then
  echo "Usage: ./run.sh \"ADD_COMPONENT Wall 1\" \"TOTAL_COST\""
  exit 1
fi

# Run the main program with the provided arguments
node . "$@"
