# kino.js
React front-end for TMDB

### Running the app
The `gulp -v` should give:
```
CLI version 3.9.1
Local version 3.9.1
```
Supporting a newer version of gulp is in the todo list...  
Before running the commands given below navigate to `app/src/utilities/API.js` and change the apiKey to your api key from TMDB.

The sequence of commands that you need are:
```
git checkout develop
npm install
gulp compile
cd public/
python3 -m http.server 9000 --bind localhost
```
The last step can be ommited, in such case navigate to the public folder open the index.html in your browser of choise.

Have fun, keep coding!
