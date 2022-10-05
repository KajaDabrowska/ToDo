# TODO App

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list
- **My Bonus**: Persist todos and dark mode

### Links

- Live Site URL: [https://todo-app-kaja.netlify.app/](https://todo-app-kaja.netlify.app/)

## My process

### Built with

- React
- Typescript
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) - drag and drop for lists in React
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop first, CSS- mobile first workflow
- Accessibility in mind

### What I learned

- Basics of the drag and drop library [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)

```tsx
{
  toDoArrDisplayed.map((toDo, idx) => (
    <Draggable draggableId={toDo.id} index={idx} key={toDo.id}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="item"
        >
          <Item id={toDo.id} completed={toDo.completed} text={toDo.text} />
        </li>
      )}
    </Draggable>
  ));
}
```

- Stopped forgeting to use the TS template for React (or so I hope 🥺)

```bash
npx create-react-app my-app --template typescript
```

- VoiceOver and Safari (Webkit) (macOS and iOS) remove list element semantics when list-style: none is used. Go to [article](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)

```html
<ul role="list">
  <!-- add the list role to the <ul> -->
  <li>...</li>
  <li>...</li>
  <li>...</li>
  <!-- etc. -->
</ul>
```
