#Makefile
install: #Установка зависимостей
	npm ci

brain-games: #Запуск
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: #Linter
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js
