# Meower

## Pages

Home - Displays list of latest "meows".
Sign Up - Allows visitors to create an account. ✅
Sign In - Allows existing users to sign in. ✅
Meow creation - Display form which allows user to submit new "meow".
Single meow - Allows us to read single moew. Allows creator to delete or edit meow.
Meow edit- Allows creator to edit single meow.
Profile - Allows us to view single users meows.
Profile edit - Allows us to edit profile

## Route Handlers

GET - '/' - Renders home page

GET - '/authentication/sign-up' - Renders sign up page ✅
POST - '/authentication/sign-up' - Handles registration ✅
GET - '/authentication/sign-in' - Renders sign in page ✅
POST - '/authentication/sign-in' - Handles user authorisation ✅
POST - '/authentication/sign-out' - Handles user sign-out ✅

GET - '/meow/create' - Renders meow creation page
POST - '/meow/create' - Handles new meow creation
GET - '/meow/:id' - Load meow from database, renders single meow
GET - '/meow/:id/edit' - Load meow from database, renders meow edit page
POST - '/meow/:id/edit' - Handles edit form submission.
GET - '/meow/:id/delete' - Handles deletion

GET - '/profile/:id' - Loads user with params.id from collection, renders profile page.
GET - '/profile/:id/edit' - Loads user and renders profile edit view.
POST - '/profile/:id/edit' - Handles profile edit submission.

## Models

User

- name: String, required ✅
- email: String, required ✅
- passworsHashAndSalt: String, required ✅
- picture: String, optional

Publication(meow)

- message: String, required, maxlength 300
- picture: String, optional
- creator: ObjectId of a document in the user collection, required
- createdAt: Date (add timestamps option to the publicationSchema)
- UpdatedAt: Date (add timestamps option to the publicationSchema)
