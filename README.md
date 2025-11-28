# Desmond Kao - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and contact information.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Sections**:
  - Hero section with introduction
  - About me section
  - Skills & Technologies showcase
  - Projects portfolio
  - Contact information with social links

## Customization

Before deploying, make sure to update:

1. **Contact Information** in `index.html`:
   - Email: Replace `your.email@example.com` with your actual email
   - LinkedIn: Replace `https://linkedin.com/in/yourprofile` with your LinkedIn profile
   - GitHub: Replace `https://github.com/yourusername` with your GitHub username

2. **Projects**: Update the project cards in the Projects section with your actual projects, descriptions, and links

3. **Skills**: Modify the skills tags to reflect your actual expertise

## GitHub Pages Setup

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the branch (usually `main`) and folder (`/root`)
5. Click "Save"
6. Your site will be live at `https://[your-username].github.io/portfolio/`

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Font Awesome (for icons)

