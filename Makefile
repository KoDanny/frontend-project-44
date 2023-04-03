#Makefile
install: #Установка зависимостей
	npm ci

brain-games: #Запуск
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: #Linter
	npx eslint .
