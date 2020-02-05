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
* Each photo card will have button that says Add to Favorites, when clicked, will add to the favorites collection (i.e it should be rendered in the FavoritePhotosContainer component). The button text should change to Already in Favorites with the button being disabled. This can accomplished by adding a `disabled ` attribute to the button element. (Heads up: since PhotoContainer and FavoritePhotoContainer both use the PhotoCard component, you MAY need to let PhotoCard know which one is rendering it)
```
   <button disabled className="ui button blue">Already in Favorites</button>
```
* In the `Header` component, we have a div (button) of "All Photos", "Favorites", and "Add New Photo". By default, when the page loads, All Photos container should render with the collection of all photos fetched from the database. When Favorites is clicked, the `FavoritePhotosContainer` component should render with only the photos that were favorited. When Add New Photo is clicked, the `AddNewPhotoForm` should render.

* In the `FavoritePhotosContainer`, the `PhotoCard` generated should have a button with the text "Remove from Favorites". When this button is clicked, it should remove the specific photo from the favorites collection.

* In the `AddNewPhotoForm`, when the form is submitted, a new photo is stored in the collection of all photos. (You might have to get creative if you're working with the ID)

### BONUS 

* Incorporate a `SearchBarComponent` under `PhotoContainer`. The goal is to `filter` out the photos whose author matches what is being typed. This should be dynamic. (i.e As I am typing, the photos in the container are immediately filtered)

* Notice that `PhotoContainer` and `FavoritePhotosContainer` seem pretty redundant. Any way we can reuse just one component?

