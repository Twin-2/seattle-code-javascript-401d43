# LAB -  API Integration with `<Auth />`

**To Do List Manager Phase 4:** Integrating with a live API

In this final phase, we'll be requiring that users be logged in through a live authentication server, in order to see the to do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them. All To Do items will be stored in a database, accessed through a deployed API

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'auth' and continue to work in your 'todo' repository.

## Business Requirements

Refer to the [To Do System Overview](../../apps-and-libraries/todo/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 4 Requirements

In Phase 4, we will finalize the functionality of the application by connecting to live servers for login, authorization, and data access. For this phase, we're adding the following user stories:

- As a user, I want my data to be persisted in a live database
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to "create", based on their user type, can add new To Do Items
- As a user, I want to ensure that only fellow users that are allowed to "update", based on their user type, can mark To Do Items complete
- As a user, I want to ensure that only fellow users that are allowed to "delete", based on their user type, can delete new To Do Items

## Technical Requirements / Notes

Technical requirements for the core application are unchanged from the prior phases, with the following additions and notes:

- Provide an account login screen
  - Accepts Username and Password
  - On successful login, store the token as a cookie
- If a user returns and has a valid login cookie, bypass the login screen and consider them "Logged In"

- Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state
  - Fetch the current list of items from the database on application start
  - Whenever you add/update/delete an item, refresh the state so the user can instantly see the change
    - Consider: Do you re-fetch from the server every time you make a change?
      - If so, how?
      - If not, how will you stay in sync?

Using Login/Auth Context, "protect" the To Do application by restricting access to the various application features based on the users' login status and capabilities.

- Implement `<Login />` and `<Auth />` components with Context
- Link to the Login screen in your main menu
  - **Hide the entire interface until the user has logged in.**
  - **Implement the following RBAC rules:**
    - Logged In Users with 'read' permissions can see the summary/count
    - Logged In Users with 'read' permissions can see the list of To Do Items
    - Logged In Users with 'update' permissions can click the records to mark them as complete
    - Logged In Users with 'create' permissions can create new items
    - Logged In Users with 'delete' permissions can delete items

## Tools and Dependencies Required:

### API Server

- You will need deployed API Server, which implements a todo item data model
  - `GET /todo`: Gets a list of all items
  - 'POST /todo': Adds an item
  - 'PUT /todo': Updates an item (you'll use this to mark them as complete)
  - 'DELETE /todo/:id' : Deletes an item

### Authentication Server

- You will need a deployed Authenticated API Server, which supports:
  - Registration (`/signup`)
  - Login (`/signin`)
  - Authorization (via Bearer Token)
  - ACL (using user roles)
    - Make sure you have created the user roles and permissions lists that your front-end is expecting to tap into
  - To Do data model for storing the actual to do items

### Testing

- Write unit tests for the Login Context Component
- Write unit tests for the Login/Auth components
  - Hide/Show based on status
- You will need to create some mocking interface to fake a server/login to simulate.
- Tests should assert all behavioral functionality

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
