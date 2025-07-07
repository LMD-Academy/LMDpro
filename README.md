
# LMDpro: AI eLearning Academy

**Homepage:**

![LMDpro Homepage Screenshot](docs/screenshots/homepage.png)
    *The clean and modern landing page for LMDpro.*


**LMDpro** is a modern, open-source, AI-powered learning platform designed to personalize and accelerate professional development. Leveraging cutting-edge AI, LMDpro provides tailored learning paths, automated content creation, an intelligent resume builder, and an interactive learning environment to help users achieve their career goals effectively.

## Key Features

-   **AI-Powered Learning Paths:** Automatically generates personalized learning paths based on user profiles, identified skill gaps, and real-time performance data.
-   **AI Content Creation:** Utilizes AI agents to research topics and write scripts for new educational content on demand.
-   **Intelligent Resume Builder:** Provides AI assistance to create and optimize resume descriptions with industry keywords. Skills from completed courses are automatically added.
-   **Interactive Course Delivery:** Courses include text, pre-recorded audio, interactive modules, and assessments. The platform supports gamification elements like badges and points.
-   **Comprehensive Course Catalog:** Browse a rich catalog of courses organized by Fields, Majors, and Levels, from foundational studies to executive-level capstone programs.
-   **AI Academic Research Agent:** An interactive AI agent in the Library to help users research topics, find publications, and identify trends.
-   **Full-Featured Admin/IAM Dashboard:** Manage learners, assign courses, issue certificates, and monitor team progress from a dedicated admin console.
-   **Printable Certificates:** A complete system for viewing and printing professional certificates for completed courses, majors, and fields of study.
-   **Rich, SEO-Optimized Blog:** A full-featured blog with in-depth articles on AI, leadership, technology, and professional development to attract and engage users.
-   **Modern, Responsive UI:** Built with Next.js, ShadCN UI, and Tailwind CSS for a beautiful, responsive experience in both light and dark modes.

## Screenshots

-   **Dashboard:**
    ![Dashboard Screenshot](docs/screenshots/dashboard.png)
    *The clean and modern Dashboard page for LMDpro.*    

-   **Course Catalog:**
    ![Course Catalog Screenshot](docs/screenshots/catalog.png)
    *Browse the extensive catalog of courses with advanced filtering.*

## Technology Stack

LMDpro is built with a modern, powerful, and scalable technology stack:

-   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **AI / Backend:** [Genkit (Firebase)](https://firebase.google.com/docs/genkit)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Deployment:** Ready for Vercel, Firebase App Hosting, or any Node.js environment.

## Installation and Setup

To get a local copy up and running, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/LMD-Academy/LMDpro.git
    cd LMDpro
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your necessary environment variables (e.g., Google AI API Key).
    ```env
    GOOGLE_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

5.  **Run the Genkit development server (in a separate terminal):**
    This starts the Genkit AI flows and makes them available to the Next.js application.
    ```sh
    npm run genkit:watch
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourAmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some YourAmazingFeature'`).
4.  Push to the branch (`git push origin feature/YourAmazingFeature`).
5.  Open a Pull Request.

Please read our `CONTRIBUTING.md` file for more details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
