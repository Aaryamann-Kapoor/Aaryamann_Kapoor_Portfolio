# Aaryamann Kapoor — Personal Portfolio Website

A clean, polished, multi-page personal portfolio website built with pure HTML5, CSS3, and vanilla JavaScript. Designed with a warm, minimalist aesthetic inspired by Claude UI.

---

## 🌟 Key Features

- **Claude UI Design**: Warm off-white background (`#FAF9F5`), cream surfaces (`#F0EEE6`), subtle borders (`#E8E6DC`), readable warm-black text (`#141413`), and terracotta accent (`#D97757`).
- **Typography**: Google Fonts *Newsreader* for headings and *Inter* for body text.
- **Dark Mode**: Dark mode toggle keeping the warm charcoal feel (`#1D1B17`), remembered across sessions via `localStorage`.
- **Zero Frameworks / No Build Step**: Pure HTML/CSS/JS ready to host for free on GitHub Pages.
- **Responsive Layout**: Mobile-first design with accessible navigation and hamburger menu on smaller screens.
- **Scroll Reveal Animations**: Smooth entry animations using modern `IntersectionObserver`.
- **Project Filtering**: Dynamic tag filtering on the Projects page.
- **Project Detail Pages**: Dedicated detail pages for featured projects with structured problem/approach/stack/role/outcome sections and clean screenshot placeholders.

---

## 📁 Repository Structure

```text
Aaryamann_Kapoor_Portfolio/
├── index.html                           # Home page (Hero, featured work, current focus)
├── about.html                           # Story, education, timeline, interests
├── projects.html                        # Project grid with tag filtering
├── skills.html                          # Categorized skills (Languages, ML/AI, Web, Tools)
├── achievements.html                    # Hackathons, programs, milestones
├── contact.html                         # Contact details & interactive form
├── 404.html                             # Custom 404 page
├── css/
│   └── style.css                        # Shared CSS theme variables and layout rules
├── js/
│   └── script.js                        # Shared JS (Theme toggle, burger menu, filter, form)
├── pages/
│   ├── project-urja-vridhi.html         # Detail page: Urja Vridhi (Watt-Wise 2.0)
│   ├── project-bharat-aapda.html        # Detail page: Bharat Aapda Prabandhan
│   └── project-business-entity-resolution.html # Detail page: Business Entity Resolution
└── README.md                            # Documentation & editing guide
```

---

## 🚀 How to Host on GitHub Pages

1. **Push to GitHub**: Make sure this repository is pushed to your GitHub account (`https://github.com/Aaryamann-Kapoor/Aaryamann_Kapoor_Portfolio`).
2. **Enable Pages**:
   - Go to your repository settings on GitHub.
   - Select **Pages** from the sidebar.
   - Under **Source**, select `Deploy from a branch`.
   - Choose `main` branch and `/ (root)` folder, then click **Save**.
3. Your site will be live at `https://aaryamann-kapoor.github.io/Aaryamann_Kapoor_Portfolio/` in a few minutes!

---

## 📝 List of Placeholders to Customize / Fill In

Below is the list of placeholders in the code where you can replace temporary or placeholder text with your real data:

1. **Contact Information & Social Links**:
   - `contact.html` & `index.html`: Replace LinkedIn URL (`https://linkedin.com/in/aaryamann-kapoor`) with your exact profile URL if different.
   - `contact.html`: Verify Email `aaryamannkapoor11@gmail.com` and GitHub link `https://github.com/Aaryamann-Kapoor`.

2. **Project Screenshots**:
   - `pages/project-urja-vridhi.html`: Replace `.image-placeholder` div with your actual screenshot `<img src="../assets/urja-vridhi.png" alt="Urja Vridhi Dashboard">`.
   - `pages/project-bharat-aapda.html`: Replace `.image-placeholder` div with screenshot.
   - `pages/project-business-entity-resolution.html`: Replace `.image-placeholder` div with screenshot.

3. **Project Live Demos & Links**:
   - `pages/project-bharat-aapda.html`: Update live demo link if hosted.
   - `pages/project-business-entity-resolution.html`: Update live demo or notebook link if available.

4. **Achievements & Milestones**:
   - `achievements.html`: Look for comment `<!-- TODO: Add your result / what made it notable -->` under Business Entity Resolution and update with your exact competition rank or metric.
   - `achievements.html`: Add any additional certifications or hackathon wins.

5. **Profile Headshot**:
   - Add your profile image to an `assets/` folder (e.g. `assets/profile.jpg`) and link it in `index.html` or `about.html` if desired.

---

## 🛠️ Local Development & Testing

Since there is no build step, you can simply open any `.html` file in your browser or run a simple local web server:

Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.
