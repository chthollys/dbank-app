# dBank (v1.0)

dBank is a decentralized banking application built on the Internet Computer (IC) blockchain. It allows users to manage their funds by performing operations such as checking balances, topping up their accounts, and withdrawing funds. The project consists of a backend canister written in Motoko and a frontend built with React.

---

## ✨ Overview

### **Frontend**
- Built with React and TypeScript.
- User-friendly interface for managing account balances.
- Real-time updates of account balances using periodic polling.
- Input validation for top-up and withdrawal amounts.
- Toast notifications for success and error messages using `react-toastify`.

### **Backend**
- Written in Motoko, deployed as a canister on the Internet Computer.
- Handles operations such as:
  - Checking account balances.
  - Topping up accounts.
  - Withdrawing funds.
  - Compounding interest over time.
- Ensures data persistence using stable variables.

---

## 📱 Technologies Used

### **Frontend**
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For type safety and better developer experience.
- **Vite**: Fast frontend build tool.
- **React Toastify**: For toast notifications.
- **Sass**: For styling.

### **Backend**
- **Motoko**: Programming language for writing canisters on the Internet Computer.
- **Internet Computer (IC)**: Blockchain platform for hosting decentralized applications.

---

## 📱 Project Structure
```bash
dbank/
├── .env                     # Environment variables
├── dfx.json                 # DFX configuration
├── package.json             # Project dependencies
├── README.md                # Project documentation
├── tsconfig.json            # TypeScript configuration
├── src/
│   ├── dbank_backend/       # Backend canister (Motoko)
│   │   └── main.mo          # Main Motoko file
│   ├── dbank_frontend/      # Frontend application (React)
│   │   ├── public/          # Static assets
│   │   │   ├── styles.css   # Global styles
│   │   │   ├── dbank_logo.png
│   │   │   └── favicon.ico
│   │   ├── src/             # React components
│   │   │   ├── components/
│   │   │   │   └── App.tsx  # Main React component
│   │   │   └── index.tsx    # React entry point
│   │   ├── package.json     # Frontend dependencies
│   │   └── vite.config.js   # Vite configuration
│   └── declarations/        # Generated canister declarations
└── .dfx/                    # DFX-generated files
```

## 💻 Installation

### **Prerequisites**
- Node.js (>= 16.0.0)
- DFX SDK (>= 0.26.0)

### **Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/chthollys/dbank-app.git
   cd dbank
2. Install dependencies:
   ```bash
   npm install
3. Clone the repository:
   ```bash
   dfx start
4. Clone the repository:
   ```bash
   dfx deploy
5. Clone the repository:
   ```bash
   cd src/dbank_frontend
   npm run start
6. Clone the repository:
   ```bash
   http://localhost:3000
   ```

## 🔎 Usage

### Features

1. Check Balance: The current balance is displayed on the main screen and updates in real-time.
2. Top Up: Enter an amount in the "Top Up" field and submit the form to add funds to your account.
3. Withdraw: Enter an amount in the "Withdraw" field and submit the form to withdraw funds from your account.
4. Compound Interest: Interest is compounded periodically based on the time elapsed since the last transaction.

### 📲 API Endpoints (Backend Canister)

1. `checkBalance`
    * Description: Returns the current balance of the account.
    * Type: Query
    * Response:
    ```bash
    {
      "balance": 300.0
    }
2. `topUp`
    * Description: Adds funds from the account.
    * Type: Update
    * Response:
    ```bash
    {
      "amount": 30.0
    }
3. `checkBalance`
    * Description: Withdraws funds from the account.
    * Type: Update
    * Response:
    ```bash
    {
      "amount": 20.0
    }
4. `compound`
    * Description: Returns the current balance of the account.
    * Type: Update



## 🗄️ Environment Variables

the .env file contains the following variables:

| Variable        | Description                      |
|-----------------|----------------------------------|
| `DFX_VERSION`   | Version of the DFX SDK           |
| `DFX_NETWORK`   | Network to deploy the canisters (`local`)     |
| `CANISTER_ID_DBANK_FRONTEND`   | Canister ID for the frontend   |
| `CANISTER_ID_DBANK_BACKEND`    | Canister ID for the backend    |

## 📋 Future Improvements
1. Add user authentication for personalized accounts.
2. Implement transaction history for better tracking.
3. Add support for multiple currencies.
4. Improve the UI/UX for a more polished experience.
5. Optimize backend logic for better performance.

## 🖋️ Acknowledgments
This project is part of a Udemy course on Web3 and blockchain development. Special thanks to the course instructor for guidance and support.
