Project name:
Art Matching Game

Wireframe:

https://www.figma.com/file/kEMBCaQiKTJOQ3KKMcojh2/Art-Matching-Game?node-id=0%3A1

Description:
A memory game that challenges users to find matching pairs of famous works of modern art.

Level 1 is a simple picture memory game. Sixteen cards will be displayed with their images concealed. Users will need to click on two cards per round to reveal the images. When the user gets the right answer and finds a pair of matching images, the cards disappear. Mismatched cards flip back to being concealed. The goal is to find all eight matching pairs.

Level 2 is a trivia round that challenges users to match the work of art with the artist. Again they will have 16 cards — half will be images, and the other half will be artist names. The goal is to find all eight matching pairs.

Gallery of art: Users can create a gallery of favorite artwork using a form.

Components:
App
NavBar
Welcome
LevelOne
GameTiles
LevelTwo
GameTiles
GalleryContainer
GalleryForm
GalleryTile

React router routes:
/welcome
/level-one
/level-two
/gallery-container

JSON-SERVER:
Our db-json will be using data from https://www.moma.org/collection/
GET request will populate the matching games card
POST request involves a form to allow users to submit their own images

Stretch goals:
Let users populate the game with their images from their art gallery
Let users rate artwork with fun icons
Custom css frills

Asana board: https://app.asana.com/0/1202840766517476/board
