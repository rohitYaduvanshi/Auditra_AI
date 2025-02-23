# AuditAI - AI-Powered Smart Contract Auditing

<div align="center">
  <br />
   <a href="https://postimg.cc/G9V5k4bf" title="Project Screenshot" target="_blank">
    <img src="./public/audit.jpg" width="100%" alt="Project Screenshot"/>
  </a>

  <br />

  <div>
    <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logoColor=white&logo=javascript&color=F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/-OpenAI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
  </div>

  <h3 align="center">AuditAI - Built at Diversion2K25 IEM Hackathon</h3>

  <div align="center">
    AuditAI is an innovative AI-powered tool designed to audit smart contracts. Developed during the **Diversion2K25 IEM Hackathon**, this project leverages OpenAI to generate detailed security audit reports, ensuring smart contract reliability and security.
  </div>
</div>

## 📷 Project Screenshot

![AuditAI Screenshot](./public/audit.jpg)

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. 🔋 [Features](#features)
3. ⚙️ [Architecture](#architecture)
4. 🤸 [Setup and Deployment](#setup-and-deployment)
5. 🚀 [Usage](#usage)
6. 🤝 [Contributing](#contributing)
7. 📜 [License](#license)

## 🤖 Introduction

AuditAI provides an efficient and automated way to audit your smart contracts using AI. It interacts with the OpenAI API to analyze and generate detailed reports on the provided smart contract code, reducing security risks and improving development workflows.

## 🔋 Features

- **🚀 Hackathon-Built**: Developed at the **Diversion2K25 IEM Hackathon**, showcasing cutting-edge AI integration.
- **🤖 AI-Powered Auditing**: Leverages OpenAI to generate comprehensive audit reports.
- **🖥️ Command Line Tool**: Provides a CLI for easy integration into development workflows.
- **🌐 User-Friendly Interface**: Offers an intuitive frontend for smart contract auditing.
- **🔗 MetaMask Integration**: Connects with MetaMask to interact with blockchain networks seamlessly.

## ⚙️ Architecture

1. **Command Line Tool**: `auditai`
2. **Frontend**: React-based user interface
3. **API Integration**: OpenAI API
4. **Wallet Connection**: MetaMask for seamless interaction with blockchain networks

## 🤸 Setup and Deployment

### Prerequisites

- Node.js and npm installed

### Steps

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/AuditAI.git
cd AuditAI
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

Create a `.env` file in the root directory with the following content:

```plaintext
OPENAI_API_KEY=your_openai_api_key
```

4. **Build the Project**

```bash
npm run build
```

5. **Install the CLI Globally**

```bash
npm install -g .
```

## 🚀 Usage

### Using the CLI

1. **Analyze a Smart Contract**

```bash
auditai check <path-to-your-contract-file>
```

### Using the Frontend

1. **Start the Frontend**

```bash
npm run dev
```

2. **Connect Wallet**: Use MetaMask to connect to the appropriate network.
3. **Submit Contract Code**: Paste your smart contract code into the provided textarea and click "Analyze".
4. **View Results**: After analysis, view the detailed audit report and security metrics in the modal.

## 🤝 Contributing

We welcome contributions! If you’d like to improve AuditAI, feel free to fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Developed with passion at **Diversion2K25 IEM Hackathon** by an innovative team of developers.* 🚀

