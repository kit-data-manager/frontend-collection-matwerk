#!/bin/bash
################################################################################
# Build spring boot with starter script
# Usage:
# bash build.sh [/path/to/installation/dir]
################################################################################

################################################################################
# Define default values for variables
################################################################################
# no defaults yet!

################################################################################
# START DECLARATION FUNCTIONS
################################################################################

################################################################################
function usage {
################################################################################
  echo "Script for creating website for MatWerk Frontend."
  echo "USAGE:"
  echo "  $0 [/path/to/installation/dir]"
  echo "IMPORTANT: Please enter an empty or new directory as installation directory."
  exit 1
}

################################################################################
function checkParameters {
################################################################################
  # Check no of parameters.
  if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters!"
    usage
  fi

  # Check if argument is given
  if [ -z "$1" ]; then
    echo "Please provide a directory where to install."
    usage
    exit 1
  fi
  
  # Check for invalid flags
  if [ "${1:0:1}" = "-" ]; then
    usage
  fi

  INSTALLATION_DIRECTORY=$1"_"$ACTUAL_DATE

  # Check if directory exists
  if [ ! -d "$INSTALLATION_DIRECTORY" ]; then 
    # Create directory if it doesn't exists.
    if ! mkdir -p "$INSTALLATION_DIRECTORY"; then
      echo "Error creating directory '$INSTALLATION_DIRECTORY'!"
      echo "Please make sure that you have the correct access permissions for the specified directory."
      exit 1
    fi
  fi
  # Check if directory is empty
  if [ -n "$(ls -A "$INSTALLATION_DIRECTORY")" ]; then
     echo "Directory '$INSTALLATION_DIRECTORY' is not empty!"
     echo "Please enter an empty or a new directory!"
     exit 1
  fi
  # Convert variable of installation directory to an absolute path
  cd "$INSTALLATION_DIRECTORY" || { echo "Failure changing to directory $INSTALLATION_DIRECTORY"; exit 1; }
  INSTALLATION_DIRECTORY=$(pwd)
  cd "$ACTUAL_DIR" || { echo "Failure changing to directory $ACTUAL_DIR"; exit 1; }
}

################################################################################
function printInfo {
################################################################################
  echo "---------------------------------------------------------------------------"
  echo "$*"
  echo "---------------------------------------------------------------------------"
}

################################################################################
# END DECLARATION FUNCTIONS / START OF SCRIPT
################################################################################

################################################################################
# Test for commands used in this script
################################################################################
testForCommands="chmod cp dirname find git handlebars mkdir"

for command in $testForCommands
do 
  if ! type "$command" >> /dev/null; then
    echo "Error: command '$command' is not installed!"
    exit 1
  fi
done

################################################################################
# Determine directory of script. 
################################################################################
ACTUAL_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

################################################################################
# Determine info
################################################################################
ACTUAL_DATE=$(date -u +%Y-%m-%d)
GIT_LOG=$(git log -1)
GIT_STATUS=$(git status -s -uno)

################################################################################
# Check parameters
################################################################################
checkParameters "$*"
printInfo "Build website for MatWerk at '$INSTALLATION_DIRECTORY'"

################################################################################
# Build service
################################################################################
printInfo "Build webpages..."
printInfo "Build handlebars.js ..."
bash ./compile.sh
cp *.html "$INSTALLATION_DIRECTORY"
cp -R *.html css/ definitions/ images/ js/ settings/ "$INSTALLATION_DIRECTORY"
mkdir "$INSTALLATION_DIRECTORY"/actuator


{
  echo "Created at:"
  echo "-----------"
  echo "${ACTUAL_DATE}"
  echo ""
  echo "Last Commit:"
  echo "-----------"
  echo "${GIT_LOG}"
  echo ""
  echo "Status:"
  echo "-------"
  echo "${GIT_STATUS}"
} > "$INSTALLATION_DIRECTORY"/actuator/info

echo .
printInfo "Now you can copy create directory '$INSTALLATION_DIRECTORY' to web server."
