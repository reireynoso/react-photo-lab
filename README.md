This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Photo Lab

## Setup

Run `npm install`

To get you going, we've got a backend with photos! To get these, you're going to have to do the following:

1. Run `json-server --watch db.json`
2. Visit `http://localhost:3000/photos` to confirm the list of photos.

If the command, `json-server` is not recognized, you might have to run `npm install -g json-server`

Let's run the app with `npm run start` or `npm start`. You will be asked if to use localhost:3001, consent to that.

## Background

We have a React Photo Library. We want the App to show us a collection of all photos in the database and also keep track of which photos we like and add that to a separate list. We will be fetching the collection of Photos from the json server and render each one onto the page. We want to be able to render either a collection of all photos OR a collection of favorites photos at one time.

## Deliverables

**It might help to first draw out the component hierarchy**

* Fetch the data from http://localhost:3000/photos
* Render each photo with the PhotoCard component.
* Each photo card will have button that says Add to Favorites, when clicked, will add to the favorites collection (i.e it should be rendered in the FavoritePhotosContainer component). The button text should change to Already in Favorites with the button being disabled. This can accomplished by adding a `disabled ` attribute to the button element.
```
   <button disabled className="ui button blue">Already in Favorites</button>
```
* In the `Header` component, we have a div (button) of "All Photos", "Favorites", and "Add New Photo". By default, when the page loads, All Photos container should render with the collection of all photos fetched from the database. When Favorites is clicked, the `FavoritePhotosContainer` component should render with only the photos that were favorited. When Add New Photo is clicked, the `AddNewPhotoForm` should render.

* In the `FavoritePhotosContainer`, the `PhotoCard` generated should have a button with the text "Remove from Favorites". When this button is clicked, it should remove the specific photo from the favorites collection.

* In the `AddNewPhotoForm`, when the form is submitted, a new photo is stored in the collection of all photos. (You might have to get creative if you're working with the ID)



* Add a new todo to the collection and have it rendered. BONUS: Make a POST request to http://localhost:3000/todos. 
Don't forget: 
```
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({})
```
* Delete a todo from the collection. BONUS: Make a DELETE request to http://localhost:3000/todos/:id
Don't forget:
```
    method: "DELETE"
```

Here is a gif of what it's supposed to look:

![Add Delete Todo](public/AddDeleteTodo.gif)

* Incorporate the SearchBarComponent within the Incomplete Component to filter out todos. As you type, the Incomplete todos are dynamically rendered. 

Here is a gif of what it's supposed to look:

![Search Todos](public/SearchTodos.gif)

### Super Bonus

* Notice the Complete and Incomplete Components are a bit redundant. Is there anyway to reuse just one component for both of them?

### Unnecessary Bonus but Good Practice Bonus

* Let's say we wanted to sort out all the todos by longest title on top. Generate a button that handles that event. If the button is clicked again, the todos should be listed in their original order in the database. It is entirely up to you where to place the methods and buttons.

Here is how the button should look like (just for style):

(This button should appear if it's not sorted)
```
<button className="ui button green">Sort by Title Length</button>
```
(This button should appear if it's sorted)
```
<button className="ui button purple">Sort Title Normally</button>
```