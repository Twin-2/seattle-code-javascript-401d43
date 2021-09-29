# `<Login />`

Today, we will implement Authentication (valid user is logged in) to create a UI that ensures that users only have access to content and functionality that they're granted access to.

## Learning Objectives

### Students will be able to

#### Describe and Define

- Cookies
- Fetch and Superagent `Authorization` Headers

#### Execute

- Authenticate using both "Basic Authorization" and a "Bearer Token"
- Store a login token for re-use

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Implementing RBAC with Conditional Rendering

What problems do we need to solve for?

- Is this a valid user (are they logged in)?
- What is the user authorized to do?
  - Which parts of our application care about this?
  - How can we determine this?
    - What's in the token?
    - Contact between the UI and the API
- How do we make this easy to use?

### Proposal

#### `Authorization` Context

- User State
  - `loggedIn` (boolean)
  - `user` (object representing the user)

- Methods
  - `login()`
  - `logout()`

#### `<Login/>` component

- Detects if a user is logged in or not (via cookie)
- Conditionally draws a login form or a logout button, based on that condition
