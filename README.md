# 💰 Investment Calculator

A professional, responsive, and fast investment calculator built using **React** and **Vite**. It allows users to estimate their future investment value based on principal, annual investment, interest rate, and duration.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🚀 Features

- 🔢 **Real-time Calculations**: Instantly see your investment growth as you change inputs.
- 📈 **Detailed Table View**: A year-by-year breakdown of investment value, interest earned, total interest, and total invested capital.
- 📱 **Responsive Design**: Modern and clean UI that works on all devices.
- 🛡️ **Input Validation**: Ensures that only valid data is used for calculations.
- ⚡️ **Optimized Performance**: Built with Vite for a blazing-fast development and production experience.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) (Functional Components, Hooks)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Pure CSS3 with custom properties and responsive layouts
- **Logic**: Custom investment calculation utility

## 📦 Project Structure

```text
investment-calculator/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components (Header, UserInput, Results)
│   ├── util/            # Utility functions (Investment calculation logic)
│   ├── App.jsx          # Root component
│   ├── index.css        # Global styles
│   └── index.jsx        # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 💻 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### 2. Installation

```bash
git clone https://github.com/ishtiaqmahmood/Investment-Calculator.git
cd investment-calculator
npm install
```

### 3. Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 4. Building for Production

To create an optimized production build:

```bash
npm run build
```

## 📸 Usage

1. Enter your **Initial Investment** amount.
2. Enter your **Annual Investment** (the amount you plan to add each year).
3. Specify the **Expected Return** (annual interest rate percentage).
4. Set the **Duration** of the investment in years.
5. The results table will automatically update with the projected growth of your investment.

## 💬 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ by [Ishtiaq Mahmood](https://github.com/ishtiaqmahmood)
