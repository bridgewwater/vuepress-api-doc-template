.PHONY: test check clean build dist all
TOP_DIR := $(shell pwd)
# each tag change this
ENV_DIST_VERSION := v1.0.0

ROOT_NAME ?= vuepress-api-doc-template

ENV_MODULE_MAKE_FILE ?= ./Makefile
ENV_MODULE_MANIFEST = ./package.json
ENV_MODULE_CHANGELOG = ./CHANGELOG.md
ENV_ROOT_DIST ?= ./dist

env:
	node -v

utils:
	node -v
	npm -v
	npm install -g commitizen cz-conventional-changelog conventional-changelog-cli

versionHelp:
	@echo "if error, pleast see log or use npm init to make package.json to fix"
	@git fetch --tags
	@echo "project base info"
	@echo " project name         : ${ROOT_NAME}"
	@echo ""
	@echo "=> please check to change version, now is [ ${ENV_DIST_VERSION} ]"
	@echo "-> check at: ${ENV_MODULE_MAKE_FILE}:4"
	@echo " $(shell head -n 4 ${ENV_MODULE_MAKE_FILE} | tail -n 1)"
	@echo "-> check at: ${ENV_MODULE_MANIFEST}:3"
	@echo " $(shell head -n 3 ${ENV_MODULE_MANIFEST} | tail -n 1)"

tagBefore: versionHelp
	@conventional-changelog -i ${ENV_MODULE_CHANGELOG} -s --skip-unstable
	@echo ""
	@echo "=> new CHANGELOG.md at: ${ENV_MODULE_CHANGELOG}"
	@echo "place check all file, then can add tag like this!"
	@echo "$$ git tag -a '${ENV_DIST_VERSION}' -m 'message for this tag'"

cleanDist:
	@if [ -d ${ENV_ROOT_DIST} ]; \
	then rm -rf ${ENV_ROOT_DIST} && echo "~> cleaned ${ENV_ROOT_DIST}"; \
	else echo "~> has cleaned ${ENV_ROOT_DIST}"; \
	fi

clean: cleanDist
	@echo "~> clean finish"

install:
	npm install

nav:
	npm run docs:nav
dev:
	npm run docs:dev

build: cleanDist
	npm run docs:build

helpProjectRoot:
	@echo "Help: Project root Makefile"
	@echo "-- now build name: $(ROOT_NAME) version: $(ENV_DIST_VERSION)"
	@echo ""
	@echo "~> make env                  ~> check env of this project"
	@echo "~> make utils                ~> install utils of this project"
	@echo "~> make versionHelp          ~> show version of this project"
	@echo "~> make tagBefore            ~> generate each tag info before commit"
	@echo "~> make clean                ~> clean project all, more info see Makefile"

help: helpProjectRoot
	@echo ""
	@echo "-- more info see Makefile or include: --"
