# Note Taker Starter Code

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Description

- My motivation with this project is to make an only front end application, into a full stack application.
- I built this project to test my knowledge and understanding of using node and express to create a backend. 
- Making this front end only application into a full stack application gives us more control and power to better help our clients needs. For example, say we need to access saved data but it's only on the client side. We want to be able to view it to better gauge our users. It also allows use to specifically do things that would otherwise restrict us in the front-end, which means more functionality. 
- What did you learn?
- I did not learn anything additional from what I was taught, but I did enjoy the practice with moduler routing, middleware, and using uuid. Moduler routing I can create, but I have a little difficulty understanding what's happening. I can say the same with middlewares. As for uuid, I saw some examples but now was able to understand as I got to use it in this project. 

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

1. To use this application, you need to have node.js installed
2. Once you have node installed, navigate to the project folder in your preferred terminal.
3. Once you have located the project working directory, make sure you are in the Develop folder.
4. Run "npm i", which should install all needed dependencies and packages.
5. You are now ready to run the application.

## Usage

1. Run the application by typing "node server" in the Develop folder. 

It should out put where the application is running on.

![alt text](/images/note-taker-console.png)

2. Navigate to this url in your preferred web application. It should look something like this.

Go head and hit get started to begin viewing/taking notes.

![alt text](/images/note-taker-home.png)

3. You will now be displayed these view. You are ready to take notes, saves notes, and view past notes. 

![alt text](/images/note-taker-main.png)

4. To begin typing, click on either the note title, or note text. Once you are done typing and would like to save a note, click the save button that only appears after there is content. If you would like to start over again, hit the plus button. 

5. Once you hit the save button, the note is saved to the database on the server. So you can always come back to it online. 

6. To delete a note, hit the trash icon to delete the note from the database. 

7. To view history of notes, click on the history of notes on the left side. 

![alt text](/images/note-taker-example.png)

## Credits

### uuid

Is a npm package used in the project creating unique ids. 

https://www.npmjs.com/package/uuid 

## License

MIT License

Copyright (c) 2023 javieb5186

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.