
# **Junior Backend Engineer Portfolio**  
[![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)](https://nodejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue)](https://www.typescriptlang.org/) [![AWS](https://img.shields.io/badge/AWS-Lambda%20|%20EC2%20|%20S3-orange)](https://aws.amazon.com/) [![Terraform](https://img.shields.io/badge/Terraform-v1.x-purple)](https://www.terraform.io/)

This repository showcases **five projects** designed to demonstrate backend engineering skills in **Node.js**, **TypeScript**, **AWS**, and **Terraform**, tailored for a Junior Backend Engineer role.  

---

## **📋 Table of Contents**

1. [Task Management API](#1-task-management-api)  
2. [Serverless URL Shortener](#2-serverless-url-shortener)  
3. [Real-Time Chat Application](#3-real-time-chat-application)  
4. [E-commerce Backend](#4-e-commerce-backend)  
5. [Infrastructure Automation with Terraform](#5-infrastructure-automation-with-terraform)  
6. [Getting Started](#⚙️-getting-started)  
7. [Contact](#📞-contact)

---

## **1. Task Management API**

### **🚀 Description**  
A RESTful API to manage tasks with user authentication and role-based access control.  

### **📂 Key Features**  
- User authentication using **JWT**.  
- CRUD operations for tasks.  
- Deployed on AWS with **Terraform**.  

### **🛠️ Technologies Used**  
- **Node.js**, **TypeScript**, **PostgreSQL**.  
- **AWS ECS**, **Terraform**.  

### **📝 Setup Instructions**  
1. Navigate to the `task-management-api` folder:  
   ```bash
   cd task-management-api
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Set environment variables in `.env` (see `.env.example`).  
4. Run locally:  
   ```bash
   npm run dev
   ```  
5. Deploy to AWS:  
   ```bash
   terraform apply
   ```  

---

## **2. Serverless URL Shortener**

### **🚀 Description**  
A serverless backend that shortens URLs and retrieves the original URLs.

### **📂 Key Features**  
- Generate short links for long URLs.  
- Set expiration dates for links.  
- Deployed on AWS Lambda using **Terraform**.  

### **🛠️ Technologies Used**  
- **Node.js**, **TypeScript**, **DynamoDB**, **API Gateway**.  
- **AWS Lambda**, **Terraform**.  

### **📝 Setup Instructions**  
1. Navigate to the `serverless-url-shortener` folder:  
   ```bash
   cd serverless-url-shortener
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Deploy to AWS:  
   ```bash
   terraform apply
   ```  
4. Test API endpoints using Postman or cURL.  

---

## **3. Real-Time Chat Application**

### **🚀 Description**  
A backend for a real-time chat application supporting multiple chat rooms.  

### **📂 Key Features**  
- Real-time messaging using **WebSockets**.  
- Multi-room support.  
- User presence tracking with **DynamoDB Streams**.  

### **🛠️ Technologies Used**  
- **Node.js**, **TypeScript**, **WebSocket**.  
- **AWS SNS/SQS**, **DynamoDB Streams**.  

### **📝 Setup Instructions**  
1. Navigate to the `real-time-chat` folder:  
   ```bash
   cd real-time-chat
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start server locally:  
   ```bash
   npm run dev
   ```  
4. Deploy to AWS:  
   ```bash
   terraform apply
   ```  

---

## **4. E-commerce Backend**

### **🚀 Description**  
A scalable backend for managing products, user accounts, and orders for an e-commerce platform.  

### **📂 Key Features**  
- Product inventory management.  
- Secure user authentication and cart handling.  
- Payment gateway integration.  

### **🛠️ Technologies Used**  
- **Node.js**, **TypeScript**, **PostgreSQL**.  
- **AWS S3**, **RDS**, **Terraform**.  

### **📝 Setup Instructions**  
1. Navigate to the `ecommerce-backend` folder:  
   ```bash
   cd ecommerce-backend
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Set environment variables in `.env`.  
4. Run locally:  
   ```bash
   npm run dev
   ```  
5. Deploy to AWS:  
   ```bash
   terraform apply
   ```  

---

## **5. Infrastructure Automation with Terraform**

### **🚀 Description**  
A reusable Terraform module for automating web application deployment on AWS.  

### **📂 Key Features**  
- Automated provisioning of EC2, S3, and RDS.  
- Outputs for application URLs, credentials, and logs.  
- Reusable module for multiple projects.  

### **🛠️ Technologies Used**  
- **Terraform**, **AWS EC2**, **S3**, **RDS**.  

### **📝 Setup Instructions**  
1. Navigate to the `infrastructure-automation` folder:  
   ```bash
   cd infrastructure-automation
   ```  
2. Update `variables.tf` with your AWS credentials.  
3. Apply Terraform script:  
   ```bash
   terraform apply
   ```  

---

## **⚙️ Getting Started**  

Clone this repository to explore the projects:  
```bash
git clone https://github.com/ericnabofa/Junior-Backend-Engineer-Portfolio.git
cd  Junior-Backend-Engineer-Portfolio
```  

Navigate to each project's folder for more details and instructions.  

---

## **📞 Contact**  

**Oghenevwegba Eric Nabofa**  
- **LinkedIn:** [linkedin.com/in/oghenevwegbaenabofa](https://www.linkedin.com/in/oghenevwegbaenabofa/)  
