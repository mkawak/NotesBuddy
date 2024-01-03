# NotesBuddy

NotesBuddy is a web application that allows users to create accounts and manage personal notes. It features a Django
backend with a React-based frontend, and it uses PostgreSQL as its database. The application is designed to be intuitive
and user-friendly, catering to anyone who needs a simple yet effective note-taking solution. The application is
currently hosted on Heroku, providing easy access from anywhere.

## Live Demo

Try the live demo of the application here: [NotesBuddy](https://notesbuddy-d3514cb3a347.herokuapp.com/)

## Features

- **User Account Management**: Users can create accounts, log in, and manage their personal notes securely.
- **Note Management**: Functionalities to add, edit, and delete notes. Each note can be managed individually.
- **Responsive UI**: The application is built using React, offering a responsive and dynamic user interface.

## Technology Stack

- **Frontend**: React
- **Backend**: Django
- **Database**: PostgreSQL
- **Hosting**: Heroku

### Local Exploration

If you want to explore NotesBuddy locally, follow these steps:

### 1. Clone the Repository

- [NotesBuddy](https://github.com/mkawak/NotesBuddy.git)

### 2. Configure a Local Python Interpreter

To run this application, you'll need Python 3.12. If you haven't installed Python 3.12 yet, you can download it from
the [official Python website](https://www.python.org/downloads/). Once Python is installed, follow these steps to
configure your local environment:

- **Verify Python Installation**:
    - Open a terminal or command prompt.
    - Check your Python version by running:
      ```
      python --version
      ```
      Make sure it says Python 3.12 or later.

- **Create a Virtual Environment**:
    - It's recommended to use a virtual environment to manage dependencies.
    - In the root directory of your project, create a new virtual environment:
        - For macOS/Unix:
          ```
          python3 -m venv venv
          ```
        - For Windows:
          ```
          python -m venv venv
          ```
    - This creates a new folder `venv` in your project directory, containing the virtual environment.

- **Activate the Virtual Environment**:
    - Before installing dependencies, activate the virtual environment:
        - For macOS/Unix:
          ```
          source venv/bin/activate
          ```
        - For Windows:
          ```
          venv\Scripts\activate
          ```

### 3. Install Dependencies

- **Install Requirements**:
    - Ensure that you are in the project's root directory.
    - For macOS/Unix and Windows:
      ```
      pip install -r requirements.txt
      ```

### 4. Set up the Frontend (For Manipulation Only)

Since Django is configured to point to `index.html` for the frontend, the React app doesn't need to be run separately
for the application to work. However, if you wish to manipulate or further develop the frontend, follow these steps:

1. Navigate to the `client` directory:

```bash
 cd client
 ```

2. Install Node Modules and Start:

  ``` bash
  npm install
  npm start
  ```

### 5. Database Configuration:

- Ensure PostgreSQL is installed and running.
- Create a PostgreSQL database.
- Update the `DATABASES` configuration in `settings.py` with your credentials.
- Migrate the database:
  ```bash
  python manage.py migrate
  ```
- Create a superuser:
  ```bash
  python manage.py createsuperuser
  ```
  
### Inspiration and Evolution

NotesBuddy began its journey as a project inspired by a tutorial on [Dennis Ivy](https://www.youtube.com/watch?v=tYKRAXIio28) **[YouTube](https://www.youtube.com/@DennisIvy)** channel, focusing on building a Django-React application. Over time, it evolved significantly, incorporating user account functionality and eventually being hosted online. This transition transformed it into a standalone platform accessible to everyone, showcasing the continuous development and expansion of the application's capabilities. Special thanks to [Dennis Ivy](https://www.youtube.com/@DennisIvy) who showcased the initial development of NotesBuddy.


### Author

Majd Kawak
