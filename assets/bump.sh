#!/usr/bin/env bash
# Perbarui penanda versi (?v=...) di index.html supaya browser mengambil CSS/JS terbaru.
# Jalankan dari folder repo: bash assets/bump.sh
set -e
cd "$(dirname "$0")/.."
for f in style.css data.js main.js; do
  h=$(sha1sum "assets/$f" | cut -c1-8)
  sed -i -E "s#assets/${f//./\\.}(\?v=[0-9a-f]+)?\"#assets/$f?v=$h\"#" index.html
done
grep -n 'assets/' index.html
