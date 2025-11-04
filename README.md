# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d3afff30-7f10-4484-8b0e-f860cec3f0cb

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d3afff30-7f10-4484-8b0e-f860cec3f0cb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d3afff30-7f10-4484-8b0e-f860cec3f0cb) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Nirmaan Vigil AI - Encroachment Detection System

## Project Overview

Nirmaan Vigil AI is an AI-powered monitoring system that detects and reports illegal land encroachments in real-time using aerial imagery and satellite data. The system helps city officials monitor public lands, roads, and community spaces to prevent unauthorized constructions that disrupt city planning.

## Key Features

### Computer Vision & Drone Data Analysis
- AI models to identify changes in land usage from aerial imagery
- Real-time detection of unauthorized constructions
- Integration with drone data for high-resolution monitoring

### Administrative Dashboard
- Interactive map interface for officials to verify encroachment reports
- Status tracking for all reported cases
- Data visualization for trend analysis

### Predictive Analytics
- AI models to predict high-risk areas for future encroachments
- Risk scoring for different zones
- Proactive monitoring recommendations

## How to Run This Project

To run this project locally, follow these steps:

```sh
# Step 1: Navigate to the project directory.
cd nirmaan-vigil-ai

# Step 2: Install the necessary dependencies.
npm install

# Step 3: Start the development server with auto-reloading and an instant preview.
npm run dev
```

The application will be available at http://localhost:8080

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Leaflet Maps
- Recharts for data visualization

## Deployment

To build the project for production, run:

```sh
npm run build
```

The built files will be available in the `dist` directory, which can be deployed to any static hosting service.
