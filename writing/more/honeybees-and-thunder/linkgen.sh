# Check if directory name is provided
if [ -z "$1" ]; then
  echo "Please provide a directory name as a command-line argument."
  exit 1
fi

# Check if the directory exists
if [ ! -d "$1" ]; then
  echo "Directory does not exist."
  exit 1
fi

linkpt1="<p><a href='honeybees-and-thunder/"
linkpt2="'></a></p>"

# Loop through the files in the directory
for file in "$1"/*; do
  if [ -f "$file" ]; then
    echo "$linkpt1$file$linkpt2"
  fi
done

