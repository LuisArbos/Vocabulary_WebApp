# Vocabulary WebApp

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the App](#running-the-app)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Introduction
Vocabulary WebApp is a comprehensive language learning platform designed to help users practice vocabulary in different languages. The initial version focuses on German and Romanian, with plans to expand to other languages. The application offers various modes of vocabulary practice, including translation, definition matching, and grammatical forms practice.

## Features
- User authentication (Login and Registration)
- Language selection and management
- Vocabulary practice by topics
- Random vocabulary exercises
- Different practice modes (translation, definition matching, grammatical forms)
- Score tracking and performance monitoring

## Tech Stack
- **Backend**: Django 5.0.6, Django REST Framework, PostgreSQL
- **Frontend**: React, Axios, React Router, Styled Components
- **Containerization**: Docker, Docker Compose

## Folder Structure
```plaintext
Vocabulary_WebApp/
├── backend/
│   ├── my_vocab_app/
│   ├── apps/
│   │   ├── users/
│   │   ├── vocabulary/
│   ├── manage.py
│   ├── requirements.txt
│   └── db.sqlite3
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   ├── package.json
│   └── webpack.config.js
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Setup Instructions
### Backend Setup
1. **Navigate to the backend directory**:
    ```bash
    cd Vocabulary_WebApp/backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run migrations**:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5. **Create a superuser**:
    ```bash
    python manage.py createsuperuser
    ```

6. **Run the development server**:
    ```bash
    python manage.py runserver
    ```

 ### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd Vocabulary_WebApp/frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server** :
    ```bash
    npm start
    ```

## Running the App

To run the app using Docker:

1. **Navigate to the project root directory**:
    ```bash
    cd Vocabulary_WebApp
    ```

2. **Build and run containers**:
    ```bash
    docker-compose up --build
    ```

## Future Enhancements

    - Expand to include more languages
    - Implement premium features and ad support
    - Develop a mobile application version
    - Add more detailed performance tracking and analytics

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or suggestions, feel free to contact me at [luisarbos@gmx.com].