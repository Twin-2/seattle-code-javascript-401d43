# class 07 - Bearer Authentication

## Warm Up

- Found the largest number in a Linked list: https://projects.invisionapp.com/freehand/document/EmeY7PEQW

## Code Review

Refactoring a "monolithic" server into a "modular" server.

* Error starting SQL
  * dialect: Postgres / SQLite / Mysql
    * connection string: `postgres://` | `sqlite://`.
* Adding methods to a Sequelize Model
  * beforeAll (hook).

What is Basic Authentication?
  * Protocol for sending username and password (as a strings):
    * Base64 encode both username and password.
    * Wrap that in an `Authorization header`.
    * Send a request with that header attached.
  * password is encrypted?
    * What is encrypted?
    * We use an algorithm to create a "hash" from the password.
      * We can compare unencrypted with the stored encrypted password.

What is Express Middleware?
  * There 3 things an express function needs in order to be used with the express library?
    * req, res, next

## Bearer Authentication

* If Basic is authentication with strings (username, password), **Bearer** is authentication using a token.
  * We no longer have to send encoded messages back and forth, from client to server.
    * Username / Password values are maybe a little sensitive, so let's maybe add **JsonWebToken**

* JSON web tokens are encoded strings, meant to have a "signature" provided by the signing entity (Our server.)
  * If our server can "verify" that a token came from the server, than we know who this User is.

## DEMO: Build a server that authenticates with both strings and tokens.
