
# LMDpro Application Documentation

## 1. Introduction

Welcome to the LMDpro - AI eLearning Academy! This documentation provides an overview of the application's features, functionalities, and how to get started. Our platform is designed to offer a comprehensive learning experience in leadership, management, and professional development, enhanced by cutting-edge AI capabilities.

## 2. Getting Started

### 2.1 Account Creation & Login
- **Unified Authentication:** LMDpro uses a single authentication page.
    - **Registration:** New users can access the registration form by clicking the "Sign Up" link on the login form. Provide your name, email, and a password. Social login options (Google, Microsoft, Apple, LinkedIn) are also available for quick registration.
    - **Login:** Existing users can log in using their email and password or through their linked social accounts. If you are on the registration form, click the "Log In" link to switch back.
- **API Key:** The application utilizes a backend-configured API key for AI features. Users do not need to provide their own API key.

### 2.2 Navigating the Dashboard
Upon successful login, users are directed to the **Dashboard**. The dashboard provides:
- A welcome message and user profile summary.
- An overview of course progress through an interactive pie chart (Completed, Ongoing, Not Started modules).
- Quick links to other sections of the application.

## 3. Core Features

### 3.1 AI Assistant
- **Interactive Chat:** Engage with the LMDpro AI assistant for queries related to course content, concepts, or general knowledge.
- **Welcome Prompts:** Use pre-defined prompts to quickly ask common questions.
- **Contextual Learning:** The AI can provide explanations, summaries, and answer questions based on the module content you are currently studying or have explored.

### 3.2 My Courses
- **Ongoing Courses:** Lists all sub-courses (modules) that you have started but not yet completed. Displays progress for each.
- **Completed Courses:** Lists all sub-courses you have successfully completed (100% progress).
- **Accessing Modules:** Click on any course item to view its details or directly start/resume learning.

### 3.3 Course Catalog
- **Browse Fields & Courses:** Explore a structured catalog of learning fields, standalone courses, and their constituent sub-courses.
- **Course Details:** Click "View Details" on any standalone course to see its overview, difficulty, length, and list of sub-courses.
- **Starting a Course:** You can start a new course directly from the catalog details modal.

### 3.4 Module View
- **Interactive Learning:** When a sub-course (module) is selected, its content is displayed paragraph by paragraph.
- **AI Enhancements:**
    - **Paragraph Audio:** Listen to an AI-generated audio narration of the current paragraph.
    - **Paragraph Illustration:** View an AI-generated image relevant to the current paragraph's content.
- **Navigation:** Use "Next" and "Prev" buttons to navigate through paragraphs.
- **Progress Bar:** Visually track your completion of the current module.
- **Ask AI about Module:** Directly engage the AI Assistant with questions related to the current module.
- **Open in Library:** Load the full module content into the Library view for research and deeper study.

### 3.5 Library & Research
- **Sub-Course Study:** Select and load full sub-course content for in-depth review.
- **AI Research Companion:**
    - **Find Publications:** Enter keywords to find relevant scholarly articles (uses Google Search grounding).
    - **Identify Trends:** Analyze the found publications to identify emerging trends in the subject area.
- **AI Summary:** Get an AI-generated summary of the loaded sub-course content.
- **Discussion Forum:** Engage in discussions with other learners or ask the AI questions about the loaded sub-course.
- **AI Demos:** Run live demonstrations of Gemini API capabilities (standard, streaming, embedding).
- **Educational Resources:** Access a curated list of external educational websites and databases, opened within an in-app browser.

### 3.6 Documentation (This Section)
- Access help articles and guides about using the LMDpro platform.

### 3.7 Profile
- View your registered name and email.
- Update professional information like job title, current position, education, and interests. This information (conceptually) helps tailor the learning experience.

### 3.8 Settings
- **Appearance:** Switch between Light and Dark themes.
- **Speech Settings:** Select preferred language/voice for Text-to-Speech features (AI-generated paragraph audio).
- **Account & Support Links:** Quick access to profile and help sections.

### 3.9 Languages
- Select the preferred UI language for the application (localization is progressive).

## 4. Technical Aspects

- **AI Integration:** The platform leverages the Google Gemini API for chat responses, content generation (audio, image, course outlines), and research assistance.
- **Data Storage:** User data (profile, course progress) is stored locally in the browser's localStorage for this demonstration.
- **Responsive Design:** The application is designed to be responsive across various screen sizes.

## 5. Troubleshooting & Support

- **FAQ:** Please refer to the FAQ section in the "Help & Support" view for common questions.
- **Contact Support:** For further assistance, contact `support@lmdpro.ai`.

Thank you for using LMDpro! We hope you have a productive and enriching learning experience.
