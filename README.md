# Wey - Social Media App

A modern social media application built with Vue.js frontend and Django REST API backend.

## 🚀 Features

- **User Authentication**: JWT-based login/signup system
- **Real-time Updates**: Modern reactive UI with Vue 3
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Secure API**: Django REST Framework with proper authentication
- **State Management**: Pinia for Vue state management

## 🛠️ Tech Stack

### Frontend

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool

### Backend

- **Django 5.2** - Python web framework
- **Django REST Framework** - API development
- **Django Simple JWT** - JWT authentication
- **Django CORS Headers** - Cross-origin resource sharing
- **SQLite** - Database (development)
- **Pillow** - Image processing

## 📁 Project Structure

```
wey_app/
├── backend/                 # Django API
│   ├── account/            # User management app
│   │   ├── models.py       # Custom User model
│   │   ├── api.py          # API endpoints
│   │   ├── forms.py        # User forms
│   │   └── urls.py         # URL routing
│   ├── backend/            # Django settings
│   └── manage.py           # Django management
├── frontend/               # Vue.js app
│   ├── src/
│   │   ├── components/     # Vue components
│   │   ├── views/          # Page components
│   │   ├── stores/         # Pinia stores
│   │   └── router/         # Vue Router
│   └── package.json
└── venv/                   # Python virtual environment
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Create and activate virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install django djangorestframework djangorestframework-simplejwt django-cors-headers Pillow
   ```

4. **Run migrations**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Start Django server**
   ```bash
   python manage.py runserver
   ```
   Backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

## 🔧 API Endpoints

### Authentication

- `POST /api/signup/` - User registration
- `POST /api/login/` - User login (JWT tokens)
- `POST /api/refresh/` - Refresh JWT token
- `GET /api/me/` - Get current user info

### User Management

- Custom User model with email as username
- JWT token authentication
- Password validation and hashing

## 🎨 Features in Development

- [ ] User profiles and avatars
- [ ] Post creation and sharing
- [ ] Real-time messaging
- [ ] Friend/following system
- [ ] Notifications
- [ ] Search functionality
- [ ] Feed algorithm

## 🔒 Environment Variables

Create a `.env` file in the backend directory:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

## 🐛 Troubleshooting

### Common Issues

1. **Django server won't start**

   - Ensure virtual environment is activated
   - Check if all dependencies are installed
   - Verify Django is installed: `pip list | grep Django`

2. **Frontend can't connect to backend**

   - Ensure Django server is running on port 8000
   - Check CORS settings in Django settings
   - Verify axios base URL in `frontend/src/main.js`

3. **Migration errors**
   - Delete `db.sqlite3` and run migrations again
   - Check if all models are properly defined

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Your commit message'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Django team for the robust backend framework
- Tailwind CSS for the utility-first CSS framework
