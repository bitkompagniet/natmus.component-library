#!/bin/bash

rm -rf node_modules
rm -rf dist

yarn
yarn build:demo
yarn build:lib