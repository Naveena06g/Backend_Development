# Event & Nudge Management Backend

This project is a backend application developed using **Node.js, Express.js, and MySQL**.  
It allows users to create and manage **events** and also create **nudges** (time-based reminders or notifications) related to those events.

The project was built to understand backend concepts such as REST API development, SQL database design, CRUD operations, and real-time logic handling.

---

## Technologies Used

- Node.js
- Express.js
- MySQL (MySQL Workbench)
- Postman (API testing)
- dotenv (environment variables)
- npm

---

## API Overview

### Event APIs (Task-1)

- **Create Event**  
  `POST /api/events`

- **Get All Events (latest & paginated)**  
  `GET /api/events?page=1&limit=5`

- **Get Event by ID**  
  `GET /api/events/:id`

- **Update Event**  
  `PUT /api/events/:id`

- **Delete Event**  
  `DELETE /api/events/:id`

---

### Nudge APIs (Task-2)

- **Create Nudge**  
  `POST /api/nudges`

- **Get Nudges by Event**  
  `GET /api/nudges/event/:eventId`

- **Get Active Nudges (time-based)**  
  `GET /api/nudges/active`

- **Delete Nudge**  
  `DELETE /api/nudges/:id`

---

## Important Notes

- An event must exist before creating a nudge.
- Nudges are shown only when the current time is between `start_time` and `end_time`.
- All APIs can be tested using **Postman**.
- Proper error handling is implemented for invalid requests.

---

## What I Learned from This Project

- Designing RESTful APIs
- Working with MySQL and foreign key relationships
- Implementing CRUD operations using Express
- Handling real-time logic using date and time
- Structuring a backend project professionally
- Debugging common backend issues

---

## Development

This project was developed by **Gaddameedi Naveena**.

---

## Purpose

This project was created for **learning, academic submission, and backend development practice**.
