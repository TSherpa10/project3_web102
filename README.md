# Web Development Project 3 - Indoor Bouldering Quiz - The Finale!

Submitted by: Tashi Sherpa

This web app: The new and improved Indoor Bouldering quiz, now with guessing capabilities, a shuffler, and a built-in streak to keep you motivated!

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer
- [X] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [x] case-insensitive input - you can write lowercase / uppercase answers and still get them right!
* [x] specific shuffling that only shuffles from index + 1 to the last index of the card array, allowing the user to gain mastery on the final few cards.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://github.com/TSherpa10/project3_web102/blob/main/project3_web102.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I had some challenges with bringing the flip state into App.jsx (introducing new flip states, I had this in Card.jsx originally but needed it to disable the input box when the card's back was showing).

I also had some trouble with some of the logic for going forward and backward the deck of cards (due to useState's instantaneous nature, the index wasn't incrementing/decrementing properly).

## License

    Copyright [2023] [Tashi Sherpa]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
