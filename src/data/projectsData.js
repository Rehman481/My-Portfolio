const projectsData = [
  {
    id: 1,
    title: 'Movie Recommendation System',
    description: 'Built a content-based movie recommendation system using machine learning. Used cosine similarity on movie features to suggest similar movies based on user input.',
    image: '/src/assets/projects/movie-recommendation.jpg',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    github: 'https://github.com/Rehman481/Movie-Recommendation-System', // Add your actual GitHub URL
    category: 'ml-ai',
    featured: true
  },
  {
    id: 2,
    title: 'Online Library Management System',
    description: 'Developed a web-based system to manage books, users, and issue/return operations with role-based access for Admin and Students. Used SignalR for real-time updates.',
    image: '/src/assets/projects/library-management.jpg',
    tech: ['ASP.NET', 'C#', 'SQL Server', 'HTML', 'CSS', 'JavaScript', 'SignalR'],
    github: 'https://github.com/Rehman481/Asp.net-Library-Management-System', // Add your actual GitHub URL
    category: 'web-dev',
    featured: true
  },
  {
    id: 3,
    title: 'Netflix Clone',
    description: 'Built a Netflix UI clone with a full authentication system, including secure email/password signup, login, and logout via Firebase. Implemented toast notifications for success and error feedback, with a fully responsive design.',
    image: '/src/assets/projects/netflix-clone.jpg',
    tech: ['React.js', 'Firebase', 'React Router', 'React Toastify', 'Vite', 'CSS'],
    github: 'https://github.com/Rehman481/Netflix-Clone', // Add your actual GitHub URL
    category: 'web-dev',
    featured: true
  },
  {
    id: 4,
    title: 'Gemini AI Chat Clone',
    description: 'Developed a modern AI chat application inspired by Google Gemini, delivering real-time AI responses through the Gemini API. Integrated Firebase Authentication for secure login/signup and built a fast, clean, and responsive UI with Vite-powered React architecture.',
    image: '/src/assets/projects/gemini-clone.jpg',
    tech: ['React', 'Vite', 'Firebase', 'Google Gemini API', 'CSS'],
    github: 'https://github.com/Rehman481/Gemini-Clone', // Add your actual GitHub URL
    category: 'web-dev',
    featured: false
  },
  {
  id: 5,
  title: 'FinWise - Smart Expense Tracker',
  description: 'Built a full-stack expense tracking application with Firebase Authentication and Firestore Database. Users can securely manage expenses, track income, set budgets, generate reports, and view analytics through an intuitive and responsive interface.',
  image: '/src/assets/projects/expense-tracker.jpg',
  tech: ['React', 'Vite', 'Firebase', 'Firestore', 'Chart.js', 'CSS'],
  github: 'https://github.com/Rehman481/B0626---Rehman-Asif---Innovaxel---Frontend-Intern',
    category: 'web-dev',
  featured: true
}
  
];

export default projectsData;