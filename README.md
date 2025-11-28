# FlavorVault 

A modern, fully responsive recipe sharing platform built with Next.js, Tailwind CSS, Node.js + Express, and MongoDB.

## 🔗 Live Demo

[https://flavor-vault-my-first-next-js-web.vercel.app](https://flavor-vault-my-first-next-js-web.vercel.app)

---

## 🧑‍💻 Features

- Browse thousands of community-submitted recipes  
- Add, edit, and delete your own recipes  
- Instant search with live filter/search feature  
- Responsive design — works on mobile & desktop  
- Authentication (Google login + Email/Password) via NextAuth.js  
- Clean, modern UI with an orange-themed design  
- Sections for Recently Added & Featured Recipes  
- Newsletter signup, testimonials and more!

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router + Server Components) + Tailwind CSS  
- **Authentication:** NextAuth.js (Google + Credentials)  
- **Backend:** Express.js (Node.js)  
- **Database:** MongoDB  
- **Icons:** Lucide React  
- **Deployment:** Vercel  

---

![Screenshot of FlavorVault Homepage](/public/images/flavor-vault-full-home.png)


## 📁 Project Structure
```bash
├── app/ # Next.js 16 App Router
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
├── public/ # Static assets: images, logos, etc.
└── backend/ # Express.js server (API, DB connection)

yaml
Copy code

```

## 🚀 Getting Started (Local Development)

### Prerequisites

- Node.js and npm installed  
- A running MongoDB instance (local or remote)  
- Environment variables (see below)  

### Installation & Running

```bash
1. Clone the repo  
git clone https://github.com/obaidullah-miazi-dev/FlavorVault-my-first-next.js-web.git
cd FlavorVault-my-first-next.js-web
Setup backend

bash
Copy code
cd backend
npm install
npm run dev
Backend will run at: http://localhost:4000

Setup frontend

bash
Copy code
cd ../    # or to frontend if you have separate folder
npm install
npm run dev
Frontend will run at: http://localhost:3000

Create a .env.local file in root with the following (example):

env
Copy code
NEXTAUTH_SECRET=your-secret-here  
NEXTAUTH_URL=http://localhost:3000  
GOOGLE_CLIENT_ID=your-google-client-id  
GOOGLE_CLIENT_SECRET=your-google-client-secret  
MONGODB_URI=mongodb://127.0.0.1:27017/flavorvault  

```

🙌 Contributing
Contributions are welcome! If you’d like to:

Add new recipes

Fix bugs

Improve UI/UX

Add new features (e.g. filters, categories, likes, comments)

Then please:

Fork the repository

Create your feature branch

Commit your changes

Push to the branch

Open a Pull Request

Your improvements are much appreciated!

📄 License
MIT © 2025 — Feel free to use, modify, and share.

📝 Acknowledgements
Thanks to all the libraries and tools that made this project possible — Next.js, Tailwind CSS, Express.js, MongoDB, NextAuth.js, and Lucide React.