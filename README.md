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
