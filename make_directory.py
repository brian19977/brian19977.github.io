#!/usr/bin/env python3
"""
Usage:
    tree | python3 make_directory.py
    tree /path/to/site | python3 make_directory.py /path/to/site
"""

import re
import sys
from pathlib import Path

FILENAME_RE = re.compile(r'([^\s/\\]+\.html?)$', re.IGNORECASE)
TITLE_RE = re.compile(r'<title[^>]*>(.*?)</title>', re.IGNORECASE | re.DOTALL)
HAS_FILE_RE = re.compile(r'\.\w+$')  # line contains some file (has an extension)

base = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('.')

for line in sys.stdin:
    m = FILENAME_RE.search(line.rstrip())
    if not m:
        # Skip non-HTML files; pass through everything else (dirs, summary, etc.)
        if HAS_FILE_RE.search(line.rstrip()):
            continue
        print(line, end='')
        continue

    filename = m.group(1)
    matches = list(base.rglob(filename))
    filepath = matches[0] if matches else None

    title = filename
    href = filename
    if filepath:
        try:
            content = filepath.read_text(encoding='utf-8', errors='replace')
            tm = TITLE_RE.search(content)
            if tm:
                title = re.sub(r'\s+', ' ', tm.group(1)).strip()
        except OSError:
            pass
        href = '/' + filepath.relative_to(base).as_posix()

    link = f'<a href="{href}">{title}</a>'
    print(line.rstrip().replace(filename, link))
