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
   git clone https://github.com/your-repository.git
   cd backend
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables. Create a .env file in the root of the backend directory with the following:
   ```bash
   DATABASE_URI=your-mongodb-uri
   PAYLOAD_SECRET=your-secret-key
4. Run the backend server:
