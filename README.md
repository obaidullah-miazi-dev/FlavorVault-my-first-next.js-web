# RecipeHub — Your Community Recipe App

A beautiful, modern, and fully responsive **recipe sharing platform** built with **Next.js 14 (App Router)**, **Tailwind CSS**, and love for food!

Live Demo: [Live Link](https://flavor-vault-my-first-next-js-web.vercel.app/)

---

### Features

- Browse thousands of community-submitted recipes
- Add, edit, and delete your own recipes
- Search recipes instantly (with live search)
- Responsive design — works perfectly on mobile & desktop
- Google Login + Email/Password authentication (via NextAuth.js)
- Clean, modern UI with orange-themed design
- Recently added & featured recipe sections
- Newsletter signup, testimonials, and more!

---

### Tech Stack

- **Framework**: Next.js 14 (App Router + Server Components)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js (Google + Credentials)
- **Backend**: Node.js + Express (running on `http://localhost:4000`)
- **Database**: MongoDB
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

---

### Project Structure

├── app/ # Next.js 14 App Router
│ ├── recipes/ # All recipes page
│ ├── addRecipes/ # Add new recipe form
│ ├── manageRecipes/ # User's own recipes (edit/delete)
│ ├── login/ # Login page
│ ├── register/ # Register page
│ └── page.jsx # Homepage with sections
├── components/ # Reusable components
│ ├── Navbar.jsx
│ ├── RecipeCard.jsx
│ ├── SearchBox.jsx
│ ├── RecentRecipesSection.jsx
│ ├── FeaturesSection.jsx
│ ├── TestimonialSection.jsx
│ ├── NewsletterSection.jsx
│ └── Footer.jsx
├── public/ # Images, logo, etc.
└── backend/ # Express.js server (port 4000)
text---

### How to Run Locally

1. **Start the backend (Express + MongoDB)**
   ```bash
   cd backend
   npm install
   npm run dev
   → Runs on http://localhost:4000
   ```

Start the frontend (Next.js)Bashcd frontend # or root if you're in the Next.js folder
npm install
npm run dev→ Open http://localhost:3000
Environment Variables (create .env.local in root)envNEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-id
GOOGLE_CLIENT_SECRET=your-google-secret
MONGODB_URI=mongodb://127.0.0.1:27017/recipehub

Contributing
We welcome contributions! Feel free to:

Submit new recipes
Fix bugs
Improve UI/UX
Add new features (filters, categories, likes, etc.)

Just fork, create a branch, and open a Pull Request!

License
MIT © 2025 RecipeHub — Free to use, modify, and share.
