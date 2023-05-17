#!/bin/bash

# Check if the directory argument is provided
#!/bin/bash

# Check if the directory argument is provided
if [ $# -eq 0 ]; then
  echo "Directory argument is missing."
  echo "Usage: bash replace_spaces.sh <directory>"
  exit 1
fi

directory="$1"  # Get the directory name from the command-line argument

# Check if the directory exists
if [ ! -d "$directory" ]; then
  echo "Directory not found: $directory"
  exit 1
fi

# Replace spaces with hyphens in filenames
find "$directory" -depth -name "* *" -type f -print0 | while IFS= read -r -d '' file; do
  new_file=$(echo "$file" | tr ' ' '-')
  mv -v "$file" "$new_file"
done

# Find all text files in the directory
text_files=$(find "$directory" -type f -name "*.txt")

# Iterate over each text file and convert to html
for file in $text_files; do
  java txt2html "$file"
  rm -f "$file"
done