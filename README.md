# ng-examples

# Setup development environment

git clone https://github.com/jinsenglin/ng-examples.git

cd ng-examples

npm install

# Start development server

cd ng-examples

./node_modules/.bin/http-server

# Add more dev dependencies, e.g., bower

npm install bower --save-dev

git add package.json

git commit -m "add new dev dependency : bower"

# Add more dependencies, e.g., angular 1.5.5

npm install angular@1.5.5 --save

git add package.json

git commit -m "add new dependency : angular 1.5.5"
