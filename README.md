## Setup instructions 

Install all the packages by running: 

### `npm i or npm install`

Then to get the development server up run: 

### `npm start`

Alternatively, you can view the app on https://tims-battleships.herokuapp.com/


### Reflection Process

Initially when I began this project, I had a good idea of how I wanted it to work and how it was going to be laid out. 
As I carried out my plans, things were going smoothly and functions were working as they should have. 

This was until I deployed it and asked some friends to test it and give me some feedback. They talked to me about making it a bit more responsive so that it can suit all sizes of screens. 
While designing and doing the CSS, I did keep this in mind, but what I learned was that my responsive design was not as good as I thought.  

With these in mind, I went back to try fix the design and make it a bit more responsive. I thought this would be a good time to learn a new CSS framework, so I installed Chakra UI and gave that a go. It was difficult to integrate Chakra into something that I had already built with React, CSS and HTML, and during this integration I had introduced some more bugs to the game. 
However, with a bit more time I managed to navigate through these bugs and create something that was a lot more responsive and a bit easier on the eye. 


Later on, they let me know that there were a few bugs with entering the coordinates in to select tiles, they worked when they weren't ships but wouldn't if they were ships. 
This led to me tracing through the code to figure out at which point the code was breaking, this took me a while to trace the error then fixing it without breaking anything else. 

TL;DR 

Use UI frameworks early on in the design process. 
Found bugs once introduced to others, took some time to fix bugs while also making the game responsive. 

#### Time Spent

Original game: 8 hours over the weekend. 
Nicer game: + 8 hours over Monday and Tuesday. 
