#!/bin/bash

for FILE in ./definitions/search/*.handlebars;
do
handlebars $FILE -f "${FILE}.js"
done

for FILE in ./definitions/base-repo/*.handlebars;
do
handlebars $FILE -f "${FILE}.js"
done
