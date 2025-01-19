# Welmnt-Internship-Task
# Blog CMS with Payload CMS Integration

## Overview

This project demonstrates the setup and integration of a backend (using Payload CMS) and a frontend (React) application to manage blog posts and authors. The backend handles content management, while the frontend dynamically fetches data to display blog posts and details about authors.

## Key Features

- **Backend**: Configured with Payload CMS to manage blog posts, authors, and media uploads.
- **Frontend**: Built with React to display blog posts and author information.
- **CMS Integration**: Utilizes Payload CMS for managing blog posts, authors, and media.

## Setup and Run Locally

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mennahmohamed/Welmnt-Internship-Task.git
   cd src
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables. Create a .env file in the root of the backend directory with the following:
   ```bash
   DATABASE_URI=your-mongodb-uri
   PAYLOAD_SECRET=your-secret-key
4. Run the backend server:
   ```bash
   npm run dev
   The backend server will be running on http://localhost:4000.


### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mennahmohamed/Welmnt-Internship-Task.git
   cd frontend
2. Install dependencies:
   ```bash
   npm install
4. Run the backend server:
   ```bash
   npm start
   The frontend client will be running on http://localhost:3000.

### **Key Backend Features**

- **Payload CMS Integration**:
  - **Posts**: Includes fields like **title**, **body**, **cover image**, and **publish date**.
  - **Authors**: Includes fields like **name**, **bio**, and **profile picture**.
  - **Media Upload**: Integrated to manage **images** and **media files**.

- **Public API**:
  - **Fetch all posts** and their associated authors.
  - **REST API** with **secure access**.

- **Admin Panel**:
  - Manage **posts** and **authors** through the **CMS interface**.
  - **Admin users** can **add**, **edit**, and **delete** posts and authors.

---

### **Key Frontend Features**

- **Post List**: Displays a list of **blog posts** with **title**, **cover image**, and **author name**.
- **Post Detail**: Displays the **full content** of a post along with the **author’s information**.
- **Responsive Design**: The frontend is styled using **Tailwind CSS** for a clean and responsive **UI**.

---

### **Key Decisions Made During Development**

1. **Choice of Payload CMS**: **Payload CMS** was chosen because of its **flexibility** in managing content and media, making it ideal for managing **blog posts** and **authors**. It also allows for easy integration with custom **backends** and **frontends**.

2. **Use of MongoDB**: **MongoDB** was selected as the **database** due to its **document-based structure**, which works well with the content management needs of the project.

3. **Frontend Framework**: **React** was chosen for the frontend due to its **component-based structure**, which made it easier to organize and maintain the **UI components** like the **post list** and **post detail** pages.

4. **API Integration**: We used **RESTful APIs** to fetch data from the **backend**, ensuring that the frontend is **decoupled** from the backend and can be easily modified or extended.


### **Conclusion**
This project provides a comprehensive solution for managing a blog with a backend (Payload CMS) and frontend (React) integration. It demonstrates the full stack setup, including database configuration, API integration, and the admin panel for managing content. Despite some challenges, the project was completed successfully, with a clean, responsive frontend and efficient backend management.
