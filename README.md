# PASSCODE

## Getting Started
Install packages
```
npm install
```

Make sure mysql is running
```
mysql.server start
```

Build the bundle
```
npm run build
```

Start the server
```
npm start
```

Play the game at localhost:3000


## Bugs
1. - [x] User shouldn't be able to select letters before word is loaded in. Should not load component until after word is there.
  - Fixed: Added a loading page between rounds to prevent rendering keyboard before word is chosen.

2. - [ ] Design is not responsive to different window sizes. Things need to be resized proportionally. Go back and use percent instead of pixels, or media queries, etc. Can't deploy until this is done.

3. - [x] Keyboard won't refresh after each new word is loaded in.
  - Fixed: use "key" to track score and reset after score change.
  - New Bug: continuous refresh causing crash.
    - Fixed: setState on netYetFound variable to prevent constant updating.

4. - [x] 1. margin: 0 auto literally never works.
  - Fixed: try using display: table or text-align: center

5. - [x] On keyboard and buttons, the key that mouse is currently on gets stuck in hover state if the pages refreshes and mouse happens to be over one of the keys buttons. Has to do with onMouseEnter? Or the way I implemented this hover state in general?
  - Fixed: Changed onMouseEnter to onMouseOver, because OME will only trigger when mouse goes from out to in, whereas OMO trigger if mouse is already on the element.

6. - [x] During second round of game, keys still glow green even if they should be red
  - Fix: forgot to reassign keys to false after every round.

7. - [x] Life bar won't animate back to fill between rounds.
  - setInterval to this setState and add 1 to attemptsLeft
  - stuck in loop
  - try putting nested conditionals and a stopInterval state. still stuck in loop
  - works better with setTimeout but now doesn't advance past loading screen
  - Fix: setTimeout on getWord() after setTimeout on switching to loading screen, with same time.

8. - [x] Upon losing, thousands of copies of current user and score are inserted into database
    - Has to do with componentDidUpdate calling the function to make a post request
    - Fix: put condition in componentDidUpdate to check for previous vs current gameOver state  

9. - [x] User shouldn't be allowed to start game without typing in a name. Currently, game doesn't load if field is left blank, but it still navigates off the home screen.
  - Fix1: use condition to check for name and only render button when hame is typed out. Not the most elegant
  - Fix2: have button link back to homepage if no name is entered. Good but would be better to show message to user so they don't assume it's broken?
  - Fix3: onClick, change placeholder value rather than linking to new page. Causes an error, though, if clicked and a name is entered, since the handleNoName function will not have been passed as props in that case.
  - Fix4: define variable click in Button component that checks for presence on handleNoName prop and is set to an empty function in its absence. This implementation could be improved, but show no errors in console.

10. - [x] How to pass props through react router <Link> tag?
  - First attempt fix: pass as url params and then use window.location.pathname. Probably not the best option but ok for now?

11. - [x] When game is over, hovering over keys makes their letters turn black. Also the whole keyboard should just be disabled or something after a loss.
  - Fix: disabled ability to click after attemptsLeft reaches 0

12. - [ ] Refreshing page during game shows 'cannot GET' message on blank page. Is it possible for refresh to take you back to home page instead?

13. - [x] Oh my god...the flickering 'A' from the title screen persists faintly on the screen. Screen damaged forever?
  - Ok it's gone

14. - [ ] Eslint not working with jsx. Showing fatal errors on = signs. Messing with eslintrc file only makes it worse.




## Ideas
1. - [x] Refactor to virtual keyboard layout instead of user input box?
  - More intuitive for user
  - Potentially scale better to mobile?
  - Allows for some fun styling (hover effects)

2. - [x] Add logic for what happens when user clicks on a key
  - Checks against given word and turns red if not there, green if is there
  - Displays all instances of correct letter on click

3. - [x] Change color of hover effect to match color of life bar.

4. - [x] Add glow around colors to make them look like neon lights.

5. - [x] Animate the life bar to fill back up before each round.

6. - [x] Create homepage for user to input name and choose difficulty. Make API call based on difficulty

7. - [ ] Figure out better solution to passing name and difficulty through the <Link> tag

8. - [x] Add backend to store high scores and show high scores at end of game

9. - [ ] How to use react router <Link> to go to high scores page without having to click on something? When gameOver is true, link to '/highscores' and render high scores component.

10. - [ ] Instead of making an API call every round, just save like 1000 random words and cycle through those?

11. - [ ] Allow keyboard input instead of only mousing over virtual keyboard

12. - [x] Go full out with neon theme and change text to look like neon sign text, soften edges, and have effects for neon lights flickering

13. - [x] There should be some message when you lose, rather than going to the high score screen automatically.  
  - See below

14. - [x] Upon losing, user should be able to see the word they missed
  - Added a 'missed' property to reveal object and 4 second delay before going to high scores page so user can read word

15. - [ ] Speed mode that gives you 5 second per guess

16. - [ ] On the left side of the screen is the word PASSCODE, all lit up. Everyone you lose a round, one of the lights goes out. After losing 8 rounds, then it's game over. This will make the game last longer than like 30 seconds. If you get two letters in a row, you get an item that lets you choose a letter to reveal.

17. - [ ] Some type of two player mode where one person picks word. But kind of lame if that's all they can do.

18. - [ ] To scale to include words with " ' " and " - " and " ", these symbols should automatically appear on screen.

19. - [ ] To scale to include larger words or multiple words, I need to figure out responsive designs techniques, in order to reduce size of lettering appearing on screen.  

20. - [ ] Currently, if a player ties with the current rank 10, they will not appear on high scores list, since when I grab, it is sorted by score, then id, and then I use only the top ten. Do I like this? Would I want to show all the ties for 10th place? Or keep it as whoever was the earliest entry in that position?

21. - [ ] Add more people to high score list and add a scroll that looks like it's entirely inside the frame. Like the names and scores are inset or sitting on shelves behind frame. Gotta keep the color gradient going down. Add date?



## Optimizations / Best Practices
1. - [ ] Add unit tests
  - Added a few, but trickier than I thought. Need more time to look through docs for jest/enzyme

2. - [x] Separate out database functions and server functions

3. - [ ] Use AirBnB style guide and linter
  - buggy with jsx for some reason

4. - [ ] getWord checkUserGuess functions have too much going on / are not very clean. Hard to figure it out just by reading them. Separate concerns and tighten them up.

5. - [x] Routing logic for virtual keypress
  - trigger handleClick function on App level to check for existence of Letter
  - Redo: initialize keyboard component with information about its presence in the word, rather than performing this logic on the keypress itself
  - Create object of key states in App component, which is altered on mount and passed down to keyboard component
    - Initially had three different arrays for top, bottom, middle, lots of repetition
    - This cut down on repetition and an object allows for constant time lookup

6. - [x] Write function in Lives component that return the correct html given an input, instead of relying on 6 conditional statements.

7. - [ ] Discovered a better implementation of life bar animation using componentWillUnmount. Try to refactor original solution if time.

8. - [ ] I really should have tried using Redux. App.jsx is getting messy and has too many state variable to keep track of and pass down. 

9. - [ ] Not happy with implementation of how app know which letter to reveal. Current implementation of an array of objects might be overkill.

10. - [ ] When trying to reuse button component for the high scores page, I am not able to change the width.
  - Temporary Fix: I resorted to make a new variable in button component that chooses width based on props. Also added a level 3 mapping for this button. I probably should have refactored key component to be reusable as the button component.

11. - [x] Prevent user from typing in certain characters as username

12. - [ ] It's pointless to store more than 10 records in database per difficulty level if I'm only going to be grabbing the top ten. When user submits score, check against scores in database to see if current score makes it to top ten, insert it, and delete the now lowest score.

13. - [ ] Conditional rendered of difficulty button at Home could be written more cleanly, possibly. Need to look more into how to use react router.
