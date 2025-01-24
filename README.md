# Blogs Viewer

The **Blogs Viewer** project is a Next.js-based web application designed to enable users to explore, authenticate, and manage blog content. It combines modern technologies like Tailwind CSS, DaisyUI, and Kinde Auth to create an interactive, responsive, and visually appealing user interface.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Environment Variables](#environment-variables)
6. [Installation & Setup](#installation--setup)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
7. [Scripts](#scripts)
8. [Usage](#usage)
   - [Authentication](#authentication)
   - [Navigation](#navigation)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

The **Blogs Viewer** is a modern blog management platform featuring:

- Secure **authentication** via Kinde Auth.
- A responsive **navigation menu** for seamless browsing.
- **Dynamic pages** for profiles and dashboard management.
- Fully **responsive UI** using Tailwind CSS and DaisyUI.

---

## Features

1. **Authentication:**

   - Secure Sign In/Sign Up with Kinde Auth.
   - Session-based user authentication.
   - Dynamic UI rendering for logged-in and guest users.

2. **User Navigation:**

   - Dedicated pages for Home, Dashboard, and Authentication.
   - Context-aware navigation items for authenticated users.

3. **Responsive UI Design:**

   - Optimized for desktop and mobile devices using Tailwind CSS.

4. **Dynamic Components:**
   - Interactive buttons and transitions using DaisyUI.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React-based framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Authentication**: [Kinde Auth](https://kinde.com/) with the `@kinde-oss/kinde-auth-nextjs` library.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Node Version**: Ensure you use the required Node.js version specified in `.nvmrc`.

---

## Folder Structure

The project follows a clean and modular structure:

---

## Environment Variables

The application uses the following environment variables. Create a `.env.local` file in the root of your project and add:

| Variable                      | Description                              |
| ----------------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_KINDE_DOMAIN`    | Your Kinde domain (required for auth)    |
| `NEXT_PUBLIC_KINDE_CLIENT_ID` | Your Kinde client ID (required for auth) |

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- A code editor (e.g., VSCode)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blogs-viewer.git
   cd blogs-viewer
   ```
