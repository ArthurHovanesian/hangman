# hangman

TODO
2. Add logic for what happens when user clicks on a key
  -Checks against given word and turns red if not there, green if is there
  -Displays all instances of correct letter on click
5. Limit guess to 6
  -something happens on losing
    -popup
  -something happens on winning
    -gain a point and try again
7. Send name and difficult level data to App from homepage
8. Make API call based on difficulty level
9. neon effect on light indicator
10. title on home page
11. neon effect on loading screen
12. clean up all the code. all of it. clean it up. make it professional.
13. testing
14. allow keyboard input
15. limit characters used in name
16. responsive design
17. instead of allowing one user multiple spot in database, update their score instead
18. maybe not the best idea to make an api call every round. better to grab 100 words at the start?
  -How to make them random? check network tab?

Journal
1. Why not redux?
  Maybe not necessary for an application this small. Manageable without it.

2. Why switch to keyboard layout instead of user input box?
  -More intuitive for user
  -Potentially scale better to mobile?
  -Allows for some fun styling (hover effects)

3. Routing logic for virtual keypress
  -trigger handleClick function on App level to check for existence of Letter
  -Redo: initialize keyboard component with information about its presence in the word, rather than performing this logic on the keypress itself
  -Create object of key states in App component, which is altered on mount and passed down to keyboard component
    -Initially had three different arrays for top, bottom, middle, lots of repetition
    -this cut down on repetition and an object allows for constant time lookup

4. Create new state variable that holds each letter of word in object along with a boolean to show or hide it. Did this because I wanted to to easily be able to conditionally reveal the letter on click. Downside is the messiness. Might want to go back and figure out a cleaner way to write this object.

5.checkUserGuess function might have too much going on / is not very optimized

6. BUG: User shouldn't be able to select letters before word is loaded in. Should not load component until after word is there.

7. BUG: life indicator and word get pushed down into keyboard when not in full screen. Doesn't look good in other window size in general

8. To restart keyboard/lives after correctly guessing word?
  -use "key" to track score and reset after score change
  -BUG: continuous refresh causing crash. Fix by setState on netyetfound variable to prevent constant updating
  -BUG: on new keyboard, key mouse is currently on gets stuck in hover state when not hovered and switches to unhovered state when it is hovered. only happens to first key. Fixed by conditional render on App based on number of letters to be found. Not the best fix, though. Actually not fixed! If user has mouse in position of keyboard while keyboard first enters screen, it happens again.

9. Idea: animate life bar to fill up to full after each round? Use setInterval to add 1 to live until reaching 6.

10. Idea: change color of hover effect to match color of life bar. Done.

11. Idea: instead of making an API call every round, just save like 1000 random words and cycle through those?

12. Need to prevent user from typing in certain characters as username

13. Idea: add glow around colors to make them look like neon lights. make change keys to glow only along lines instead of whole cell. also on the load screen text.

14. Idea: go full out with neon theme and change text to look like neon sign text, soften edges, and replace hexagon with word 'password' in neon colors that one by one dim upon a wrong guess

15. BUG: second round keys still glow green even if they should be red
  -Fix: forgot to reassign keys to false after every round.

16. How to pass props through recat router <Link> tag?
  -First attempt fix: pass as url params and then use window.location.pathname. Probably not the best option but ok for now?

17. Bug: SHouldn't be allowed to submit empty name

18. seprate out dataabse functions and server functinos

19. Bug: upon losing, thousands of copies of current user and score are inserted into database
  -Has to do with componentDidUpdate calling the function to make a post request
  -temporary Fix: but condition in componentDidUpdate to check for prev vs curr gameover state

20. I want to animate life bar refilling after every Round
  -setinterval to this setstate and add 1 to attemptsleft
  -stuck in loop
  -try putting nested conditionals and a stopinterval state. still stuck in loop
  -works better with settimeout but now doesn't advance past loading screen
  -Fix: settimout on getWOrd() after settimeout on switching to loading screen, with same time.

21. When trying to reuse button component for the high scores page, i was not able to change the width. So i resorted to make a new variable in button component that chooses width based on props. Also added a level 3 mapping for this button. i probably should have refactored key component to be reuasble as the button component.  
