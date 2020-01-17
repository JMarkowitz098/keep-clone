# Keep Clone - [Live Demo](https://jared-keep-clone.herokuapp.com/#/login){target="_blank"}


Keep clone is an app that lets you create digital sticky notes! You can create, edit, and delete any 
number of memos you want to keep. You can even change their color!

**Keep Clone was built using:**
1. Ruby on Rails
2. React
3. Redux
4. Javascript
5. PostgreSQL
6. Webpack
7. HTML
8. CSS
9. SCSS




**Create notes** 
+ Seamlessly create notes right on your note page
+ Intuitively save your notes by clicking the close button or simply clicking outside of the form
+ New notes are automatically added to the start of your list

![Create Note Gif](app/assets/images/ezgif.com-video-to-gif.gif "Create Note Gif")

**Edit notes**
+ Easily edit a note by clicking on it and see it open right there!
+ Save the note by simply closing it, again by using the button or clicking outside of the note
+ Change the colors of your note with a single click!

![Edit Note Gif](app/assets/images/EditNoteGif.gif "Edit Note Gif")

An especially challenging feature of the note edit function was getting it to open as a modal. In order for the modals state to persist, the onChange event listener had to be bounded to the modal and then threaded through the props until it could be invoked on the edit form. 


Equally challenging was getting a note to act the same way both for closing the modal and for clicking the save button. Each feature had to have a different handleSubmit function because they were actually located at different parts in the program. 