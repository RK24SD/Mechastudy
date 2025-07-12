Mech: Empowering students to learn, contribute, and earn together! 

A Student-Driven Educational Ecosystem

Welcome to Mech, a platform built by students, for students, to revolutionize access to educational resources. Mech addresses the challenges of disorganized question papers, unreliable answers, and lack of rewards for contributors. Our web app lets you view, download, and share question papers, while the planned mobile app unlocks free and premium answers, contributions, and more. With a reward-based system, contributors earn based on ratings, creating a vibrant ecosystem for learning and collaboration.
Why Mech?

As a college student, I struggled with accessing organized past question papers and quality answers, often facing scattered resources and restricted content. Mech solves this by offering a seamless platform where students can access question papers, contribute content (answers, notes, projects), and earn rewards. High CGPA contributors and faculty are verified to ensure quality, making Mech a trusted, student-run ecosystem for all learners.
Features

Question Paper Dashboard (Web App):
View, download, and share question papers (organized by subject, code, year, and exam type: mid, final, makeup, mid-makeup).
No zoom in/out for a focused experience.
Clarification form for doubts.
QR code/link to download the mobile app.


Answer Access (Mobile App, Planned):
Free user-submitted answers with community ratings.
Premium topper/faculty answers via subscription (120 units).
Save answers to cloud storage (sharing restricted).


Contributions:
Upload answers, notes, projects, research, or theses.
High CGPA contributors (verified via college email/ID) can upload problem-solving videos.
Faculty can share free or paid notes.


Monetization:
Contributors earn a percentage based on ratings/downloads.
Subscription model for premium content.


Quality Control:
High CGPA contributors verified with college email and ID.
Community ratings ensure content quality.



Tech Stack

Frontend: React, Tailwind CSS, QRCode.js (web); Flutter (mobile, planned).
Backend: Firebase (Authentication, Firestore, Cloud Storage, Functions).
Payment: Stripe (subscriptions).
Tools: VS Code, Figma, Git/GitHub, Postman, Cypress, Jest.

Getting Started
Prerequisites

Node.js (v16+)
Firebase CLI
Git
A Firebase project (set up at console.firebase.google.com)

Installation

Clone the Repository:
git clone https://github.com/RK24SD/Mechastudy
cd mech


Install Dependencies:
npm install


Set Up Firebase:

Create a Firebase project and enable Authentication, Firestore, and Cloud Storage.
Add your Firebase config to src/firebaseConfig.js:import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
const app = initializeApp(firebaseConfig);
export default app;




Run the App:
npm start

The web app will run at http://localhost:3000.


Deployment

Deploy the web app to Firebase Hosting:firebase deploy



Project Structure
mech/
├── public/                # Static assets
├── src/
│   ├── components/        # React components (Dashboard, PaperView, etc.)
│   ├── firebaseConfig.js  # Firebase configuration
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── package.json           # Dependencies and scripts
└── README.md              # This file

Contributing
We welcome contributions from students, faculty, and developers! To contribute:

Fork the repository.
Create a branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a pull request.

Contribution Guidelines

Question Papers: Upload organized PDFs (subject, code, year, exam type).
Answers/Notes: Ensure clarity and relevance; high CGPA contributors must verify with college email/ID.
Code: Follow React best practices; include tests (Cypress/Jest).
UI/UX: Align with Tailwind CSS for a modern, engaging look.

Roadmap

Phase 1 (1 Month): Finalize UI/UX in Figma, set up Firebase.
Phase 2 (3 Months): Build web app (dashboard, contributions, subscriptions).
Phase 3 (1 Month): Test and deploy web app.
Phase 4 (4 Months): Plan and develop Flutter mobile app.

License
This project is licensed under the MIT License.
Contact
For questions or feedback, reach out via GitHub Issues or email raghavrajk24@gmail.com.

Mech: Empowering students to learn, contribute, and earn together!
