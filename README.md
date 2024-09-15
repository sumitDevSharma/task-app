# ![LARAVEL](https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg) 



# Task Management Application

A **Task Management Application** built using Laravel, designed to provide an intuitive interface for teams and individuals to manage their tasks, set deadlines, and enhance productivity. This application includes task assignment, progress tracking, notifications, and a responsive user interface.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Building Front-end Assets](#building-front-end-assets)
- [Usage](#usage)
- [Testing](#testing)

---

## Features

- **User Authentication:** Includes registration and login functionality using Laravel’s authentication scaffolding.
- **Task Creation and Management:** Easily create, view, update, and delete tasks.
- **Task Assignment:** Assign tasks to specific users to improve team collaboration.
- **Task Status:** Track task statuses including "To Do," "In Progress," and "Completed."
- **Deadline Management:** Add and manage deadlines for tasks.
- **Priority Levels:** Assign priority levels (Low, Medium, High) to tasks for better organization.
- **Email Notifications:** Users receive notifications about task updates and due dates.
- **Responsive Design:** Built using Bootstrap to ensure a mobile-friendly experience.

---

## Prerequisites

Ensure you have the following installed before proceeding with the installation:

- **PHP** >= 8.0
- **Composer** (Dependency Manager)
- **Laravel** >= 9.x
- **MySQL** (or any database supported by Laravel)
- **Node.js** and **npm** (for managing front-end dependencies)
- **Git** (for version control)

---

## Installation

To set up the application on your local machine, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install Backend Dependencies:**

   Use Composer to install the Laravel dependencies:

   ```bash
   composer install
   ```

3. **Install Frontend Dependencies:**

   Install Node.js packages and dependencies:

   ```bash
   npm install
   ```

---

## Configuration

1. **Environment Configuration:**

   Copy the example environment configuration file:

   ```bash
   cp .env.example .env
   ```

2. **Generate the Application Key:**

   This key is used to encrypt sensitive data:

   ```bash
   php artisan key:generate
   ```

---

## Database Setup

1. **Database Configuration:**

   Open the `.env` file and configure the database settings:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=task_management
   DB_USERNAME=root
   DB_PASSWORD=yourpassword
   ```

2. **Run Database Migrations:**

   Run the following command to create the database tables:

   ```bash
   php artisan migrate
   ```

3. **Database Seeding (Optional):**

   You can populate the database with sample data:

   ```bash
   php artisan db:seed
   ```

---

## Running the Application

After installation and configuration, you can run the application:

1. **Start Laravel Development Server:**

   ```bash
   php artisan serve
   ```

   This will start the application at `http://localhost:8000`.

---

## Building Front-end Assets

To compile and optimize the front-end assets (CSS, JS):

1. **Development Build:**

   For local development, use:

   ```bash
   npm run dev
   ```

2. **Production Build:**

   For production environments:

   ```bash
   npm run build
   ```

---

## Usage

After installation:

1. **Access the Application:**

   Open your browser and visit `http://localhost:8000`.

2. **User Registration:**

   Register a new account or log in using your credentials.

3. **Task Management:**

   - Create new tasks, assign them to users, and manage the status.
   - Admins can monitor progress and modify tasks as needed.

---

## Testing

Run the automated test suite to ensure the application's functionality:

```bash
php artisan test
```

The application includes both unit and feature tests to verify the behavior of key components.

---



