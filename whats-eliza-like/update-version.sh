#!/bin/bash
BASE="`git rev-parse --show-toplevel`"
chmod +w "$BASE/VERSION" "$BASE/cache.manifest" 2>/dev/null
echo VERSION:
echo -n $("$BASE/version.sh") | tee "$BASE/VERSION"
echo
echo
## create google analytics file if it doesn't exist
# touch GOOGLE-SITE-VERIFICATION
