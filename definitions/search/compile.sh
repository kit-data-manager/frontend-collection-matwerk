#!/bin/bash

for FILE in ./*.handlebars;
do
handlebars $FILE -f "${FILE}.js"
done
