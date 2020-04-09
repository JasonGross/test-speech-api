#!/bin/bash

emotions="$(echo -n "$(cat emotions)" | sed s'/^\(.*\)$/"\1"/g' | tr '[:upper:]' '[:lower:]' | tr '\n' ',' | sed s'/,/, /g')"

function do_replace_num() {
    cat \
	| sed s"/\(\s*\)@default$1@/\1\"($1).  What's that like?\",\n\1\"($1).  What's that like for you?\",\n\1\"($1).  What's that like, for you?\",\n\1\"($1).  What is that like?\",\n\1\"($1).  What is that like for you?\",\n\1\"($1).  What is that like, for you?\"/g" \
	| sed s"/\(\s*\)@default$1-mid@/\1\"What's ($1) like?\",\n\1\"What's ($1) like for you?\",\n\1\"What's ($1) like, for you?\",\"What is ($1) like?\",\n\1\"What is ($1) like for you?\",\n\1\"What is ($1) like, for you?\"/g"
}

cat "$1" \
    | sed s"/\(\s*\)@default@/\1\"What's that like?\",\n\1\"What's that like for you?\",\n\1\"What's that like, for you?\",\n\1\"What is that like?\",\n\1\"What is that like for you?\",\n\1\"What is that like, for you?\"/g" \
    | do_replace_num 2 \
    | do_replace_num 3 \
    | do_replace_num 4 \
    | sed s"/@emotions@/$emotions/g" \
    > "$2"
