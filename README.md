# Assist Route

Assist Route is an application that helps the school bus assistant manage the attendance of students who use the bus, the stops and routes they use and be able to quickly contact the students or their legal guardians.

## Getting started

### Server

Clone this repo into your local. Navigate to the server directory and install server dependencies:

```bash
npm install
```

To use a database you need to first install it on your computer. For this project you will need [PostgreSQL](https://postgresql.org/) as well as [Sequelize](https://sequelize.org).

Through the CLI, check what DBs already exist in your SQL instance, create one for this app, and update data in the file `server/models/index.js`.

Start the server:

```bash
npm start
```

### Client

**Technology used for client development:**

- React with Vite.

Navigate to the client directory and install client dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
