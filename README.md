# BI-Admission-s-ESPRIT - Business Intelligence and Artificial Intelligence for ESPRIT Admissions

## Context and Objectives

This project aims to develop a Business Intelligence (BI) solution integrated with Artificial Intelligence (AI) technologies to optimize the management of admissions at ESPRIT and the monitoring of student performance (academic and professional). The main objective is to provide advanced analysis tools to inform strategic decision-making in several key areas:

* **Admissions Analysis:** Tracking applications, interviews, and the scheduling of dates for new students.
* **Alumni Tracking:** Analyzing academic averages, performance indicators, and post-graduation employability.
* **Strategic Optimization:** Exploring historical and current data to identify trends and improve admission strategies.

Centralizing and enriching candidate data will enable more efficient management of academic, administrative, and professional processes, providing a comprehensive strategic vision.

## Functional Scope

* **Admissions Management:**
    * Tracking application processing times.
    * Analyzing interview success rates.
    * Identifying and monitoring applications requiring additional information or corrections.
* **Academic and Professional Performance Monitoring:**
    * Measuring students' academic progress.
    * Tracking post-graduation performance indicators (employability, professional integration).
* **Historical and Current Data Management:**
    * Tracking enrollment data and past cohorts.
    * Identifying application trends based on sessions and academic programs.

## Functional Objectives

* **Optimize Operational Efficiency:** Reduce application processing times and improve admissions management.
* **Strengthen Strategic Steering:** Implement Key Performance Indicators (KPIs) to monitor academic, administrative, and professional performance.
* **Facilitate Decision-Making:** Develop an interactive dashboard to visualize and analyze consolidated data.

## Deployment Steps

This project consists of an Angular frontend application and a Flask (Python) backend. Here are the steps to deploy and run the application:

### Prerequisites

Ensure you have the following environments installed on your machine:

* **Node.js and npm (Node Package Manager):** Required to run the Angular application. You can download them from [https://nodejs.org/](https://nodejs.org/).
* **Python 3:** Required to run the Flask backend. You can download it from [https://www.python.org/downloads/](https://www.python.org/downloads/).
* **pip (Python Package Installer):** Usually included with Python installation.
* **Angular CLI (Command Line Interface):** A command-line tool for developing Angular applications. Install it globally using the command:
    ```bash
    npm install -g @angular/cli
    ```

### Installation and Execution Steps

1.  **Clone the GitHub repository:**
    ```bash
    git clone [https://github.com/toujaniayoub/BI-Admission-s-ESPRIT.git](https://github.com/toujaniayoub/BI-Admission-s-ESPRIT.git)
    cd BI-Admission-s-ESPRIT
    ```

2.  **Backend (Flask) Configuration:**
    * Navigate to the backend folder (usually within a subdirectory named `backend` or `deployment`).
    * Create a virtual environment (recommended):
        ```bash
        python -m venv venv
        source venv/bin/activate  # On Linux/macOS
        venv\Scripts\activate  # On Windows
        ```
    * Install Python dependencies:
        ```bash
        pip install -r requirements.txt  # If you have a requirements.txt file
        pip install Flask Flask-CORS pandas sqlalchemy psycopg2 scikit-learn prophet
        ```
        Ensure that the libraries mentioned in the `app.py` file are installed.
    * Configure the PostgreSQL database connection: Modify the connection string in `app.py` if necessary:
        ```python
        engine = create_engine("postgresql+psycopg2://postgres:root@localhost:5432/DW_2")
        ```
        Make sure your PostgreSQL database is running and accessible.
    * Run the Flask application:
        ```bash
        python app.py
        ```
        The Flask backend will typically start on `http://127.0.0.1:5000/`.

3.  **Frontend (Angular) Configuration:**
    * Navigate to the Angular application folder (usually at the root of the repository or in a subdirectory named `frontend` or `angular`).
    * Install Angular dependencies:
        ```bash
        npm install
        ```
    * Start the Angular development server:
        ```bash
        ng serve -o
        ```
        The `ng serve -o` command will build the application and automatically open it in your browser (usually on `http://localhost:4200/`).

### Important Notes:

* Ensure the Flask backend is running before starting the Angular application, as the frontend communicates with the backend to fetch data.
* If your Flask backend runs on a different port than `5000`, you might need to configure the API requests in your Angular application to point to the correct address.
* The `data.csv` and `industry_counts.csv` files mentioned in the Flask code should be present in the same directory as `app.py` or the correct file paths should be specified.

## Online Application Link

[**http://localhost:4200/**]

Based on the provided information, the application features the following:

* **Homepage:** The initial landing page for the application.
* **Login Authentication:** Secure authentication system for different user roles.
* **Role-Based Access:** Separate spaces for different clients:
    * **Head of Admissions Department:** A dashboard containing admissions analysis and a model predicting future application numbers (as seen in the "Prévision Admissions" section of the provided PDF).
    * **Head of Employability Department:** A dedicated space with dashboards, recommendations for alumni skills for specific jobs, a search functionality, and clustering of alumni based on industry (as suggested by "Alumni Industry Clusters").
* **Machine Learning Models:** Includes a prediction model for admissions and a recommendation system for alumni skills.
* **APIs:** The Flask backend (`app.py`) provides APIs to fetch data for the frontend, including:
    * Forecasted admission numbers.
    * Industry-based alumni counts.
    * Skill recommendations based on job titles.

## Angular Project Structure

The Angular application follows a standard Angular CLI project structure. Key elements you can expect to find include:

* **`src/app/components/`:** Contains UI components such as the homepage, login form, admissions dashboard, employability dashboard, charts, and tables.
* **`src/app/services/`:** Includes services that handle business logic and communication with the Flask backend API for authentication and data retrieval.
* **`src/app/modules/`:** Organizes features into logical modules (e.g., authentication module, dashboard module).
* **`src/app-routing.module.ts`:** Defines the navigation routes within the application.
* **`src/assets/`:** Contains static assets like images and configuration files.
* **`src/environments/`:** Configuration files for different deployment environments.
* **`angular.json`:** Angular CLI configuration file.
* **`package.json`:** npm package file listing dependencies and scripts.
* **`tsconfig.json`:** TypeScript configuration file.

The application likely includes components to display the dashboards and visualizations for both the admissions and employability departments, utilizing the data fetched from the Flask backend. The "Get Skills Based On A Job" functionality, as seen in the PDF, is also implemented in the Angular frontend, interacting with the corresponding Flask API endpoint.
