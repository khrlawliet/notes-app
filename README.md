# Notes App

A simple TypeScript, Node.js, and Express application for managing notes with CRUD operations.

## Features

- Create a new note.
- Retrieve all notes.
- Retrieve a specific note by ID.
- Update a specific note.
- Delete a specific note.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:

    `git clone https://github.com/your-username/notes-app.git`

2.  Change to the project directory:

    `cd notes-app`

3.  Install dependencies:

    `npm install`

### Usage

1.  Start the application:

    `npm start`

    The server will be running at http://localhost:3000.

2.  Use tools like Postman, curl, or your preferred API testing tool to interact with the API endpoints.

### API Endpoints

- **GET /notes**: Retrieve all notes.
- **GET /notes/:id**: Retrieve a specific note by ID.
- **POST /notes**: Create a new note.
  - Request Body: `{ "title": "Your note title", "body", "your note body content" }`
- **PUT /notes/:id**: Update a specific note by ID.
  - Request Body: `{ "title": "Your note title", "body", "your note body content" }`
- **DELETE /notes/:id**: Delete a specific note by ID.

### Data Storage

Notes are stored in-memory using an array. Restarting the server will reset the notes.

### Data Validation

Input data for creating and updating notes is validated to ensure that the content is a non-empty string.

### Error Handling

Basic error handling is implemented for common scenarios, such as a note not being found.
