
# Doctor Website Backend (Node.js + Supabase)

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    Create a `.env` file in the root directory with the following content:
    ```env
    project_url=YOUR_SUPABASE_PROJECT_URL
    anon_key=YOUR_SUPABASE_ANON_KEY
    PORT=5000
    ```

3.  **Database Setup:**
    Run the SQL script `schema.sql` in your Supabase SQL Editor to create the necessary tables.

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## API Endpoints

-   **Auth:**
    -   `POST /api/auth/register` (Register doctor or patient)
    -   `POST /api/auth/login` (Login doctor or patient)

-   **Doctors:**
    -   `GET /api/doctors` (List all doctors)
    -   `GET /api/doctors/:id` (Get doctor details)
    -   `PUT /api/doctors/:id` (Update doctor profile)

-   **Patients:**
    -   `GET /api/patients` (List all patients)
    -   `GET /api/patients/:id` (Get patient details)
    -   `PUT /api/patients/:id` (Update patient profile)

-   **Appointments:**
    -   `POST /api/appointments` (Book appointment)
    -   `GET /api/appointments?userId=...&role=...` (Get appointments for a user)
    -   `PUT /api/appointments/:id` (Update appointment status/reschedule)
