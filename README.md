# hangman

TODO
1. Move keyboard to bottom of screen
2. Add logic for what happens when user clicks on a key
  -Checks against given word and turns red if not there, green if is there
  -Displays all instances of correct letter on click
3. Move word above keyboard
4. Initialize word with blank underscores
5. Limit guess to 6
  -something happens on losing
  -something happens on winning
6. Flash red every second when attemptsLeft is 1

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
