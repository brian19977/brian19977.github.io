file="$1"

awk '{
    out = ""
    toggle = 1
    for (i = 1; i <= length($0); i++) {
        c = substr($0, i, 1)
        if (c == "_") {
            if (toggle == 1) {
                out = out "<span style=\"font-style: italic;\">"
                toggle = 0
            } else {
                out = out "</span>"
                toggle = 1
            }
        } else {
            out = out c
        }
    }
    print out
}' "$file" > "$file.tmp" && mv "$file.tmp" "$file"