# 🛡️ ShieldScan

> **AI Powered Phishing Link & Suspicious Message Detector**

ShieldScan is a full-stack cybersecurity web application designed to help users identify phishing URLs and suspicious messages before interacting with them. It combines an intelligent rule-based detection engine with an AI-ready architecture that can be extended with machine learning models in the future.

The project focuses on improving cybersecurity awareness by analyzing suspicious links and messages, assigning a threat level, calculating a risk score, and providing clear security recommendations.

---

## ✨ Features

### 🔗 URL Scanner

* Detects insecure HTTP websites
* Detects IP-based URLs
* Detects suspicious domain extensions
* Detects shortened URLs
* Detects phishing keywords
* Detects excessive subdomains
* Detects multiple hyphens
* Detects numeric domains
* Calculates Risk Score
* Calculates Safety Score
* Generates Detection Reasons
* Provides Security Recommendation

---

### 💬 Message Scanner

* Detects phishing keywords
* Detects urgency language
* Detects suspicious links
* Detects phone numbers
* Calculates Risk Score
* Calculates Safety Score
* Generates Detection Reasons
* Provides Security Recommendation

---

### 📊 Detection Levels

* ✅ Safe
* 🟡 Low Risk
* 🟠 Suspicious
* 🔴 Dangerous
* ⚪ Invalid URL

---

## 🛠️ Technology Stack

### Frontend

* React 19
* Vite
* Tailwind CSS
* React Router DOM
* Framer Motion
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* Helmet
* Morgan
* CORS
* dotenv

---

## 📂 Project Structure

```text
ShieldScan/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── analyzers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install all dependencies

```bash
npm run install:all
```

Run Backend

```bash
npm run dev:server
```

Run Frontend

```bash
npm run dev:client
```

---

## 🌐 API Endpoint

Health Check

```http
GET /api/health
```

Response

```json
{
  "status": "Server Running"
}
```

---


## Direct App Commands

Frontend:

```bash
cd ShieldScan/client
npm install
npm run dev
npm run build
```

Backend:

```bash
cd ShieldScan/server
npm install
npm run dev
npm start
```

## Current Pages

- Home
- URL Scanner
- Message Scanner
- About
- 404

## Verification Checklist

- Client dependencies install successfully.
- Server dependencies install successfully.
- `npm run dev` starts the client from `client/`.
- `npm run dev` starts the API from `server/` on port `5000`.
- `GET /api/health` returns `{ "status": "Server Running" }`.
- React Router renders all placeholder pages.
- Tailwind styles load correctly.
