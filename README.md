# The Explorer - Travel Blog Application

The Explorer is a vibrant travel blog that takes you on immersive journeys around Sri Lanka. Discover hidden gems, travel tips, and personal experiences from diverse destinations. Whether you're an adventurer or a casual traveler, "The Explorer" inspires and guides you to explore the beauty and culture of each place.

## Features
- **Dynamic Blog Posts:** View detailed travel stories and tips from various destinations in Sri Lanka.
- **Search Functionality:** Quickly find posts based on destinations or topics.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
- **Interactive UI:** Smooth navigation and a user-friendly interface powered by Next.js.
- **Database Integration:** MongoDB is used to store blog posts, user data, and other application data securely.
- **SEO Optimized:** Enhanced for search engines to help rank higher in results.

## Tech Stack
- **Frontend:** Next.js
- **Backend:** Node.js with API routes in Next.js
- **Database:** MongoDB (via Mongoose)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Folder Structure
All files for the project are located in:
```
\The-Explorer\the-explorer
```

### Key Directories:
- `components`: Reusable React components.
- `pages`: Contains all the routes and API endpoints.
- `styles`: Tailwind CSS and global styles.
- `lib`: Helper functions and database configurations.
- `models`: Mongoose models for MongoDB collections.

## Installation and Setup

Follow the steps below to run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd The-Explorer/the-explorer
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

5. **Build for Production:**
   To create an optimized production build:
   ```bash
   npm run build
   npm start
   ```

## Deployment
The application is deployed on [Vercel](https://vercel.com/). To deploy your version:

1. Push your code to a GitHub repository.
2. Link the repository to Vercel.
3. Set up the environment variables on Vercel.
4. Trigger a deployment from the Vercel dashboard.

## Contributing
Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes and push to your branch.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or feedback, please reach out to:

**Author:** K.M.P.K.Bandara
**Email:** pramudithakavinda01@gmail.com

---

Explore the world with **The Explorer** and uncover the magic of Sri Lanka!
