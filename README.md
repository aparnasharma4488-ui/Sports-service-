# Group 12D12 D0-50: Dockerized Sports Rust Service 
# Division 
D12 
# Group Group 
12D12
# Project Number 
D0-50 
# Problem Statement
Containerized Sports Service (Rust-Based)

In modern application development, deploying backend services across different environments (development, testing, production) often leads to environment inconsistencies, dependency conflicts, and scalability issues. Traditional deployment methods make it difficult to ensure portability, security, and reproducibility.

To address these challenges, there is a need to design and implement a containerized sports management backend service that:

Provides REST APIs to manage sports data (teams, matches, scores, players).

Ensures consistent deployment across environments.

Follows industry best practices for Docker image optimization and security.

Supports easy orchestration of application and database services.
# Project Overview
The objective of this project is to: Develop a high-performance backend service using Rust. Containerize the application using multi-stage Docker builds. Configure Docker Compose to orchestrate: Sports Service container Database container Ensure: Lightweight image size Secure configuration Environment portability Production-ready setup
# Objectives
.Develop a Rust-based Sports backend service with REST APIs.

.Integrate the application with a relational database. 

.Containerize the service using multi-stage Docker builds. 

.Use Docker Compose to manage application and database containers. 

.Ensure portability, security, and optimized deployment. 
# Tech Stack 
. Programming Language: Rust 

. Web Framework: Actix-web / Rocket 

. Database: PostgreSQL / MySQL 

. ORM / DB Library: Diesel / SQLx 

. Containerization: Docker 

. Orchestration: Docker Compose 

. Version Control: Git & GitHub 

. API Testing: Postman 

. Build Tool: Cargo 
# Key Features 
. RESTful APIs for managing Teams, Matches, and Scores 

. CRUD operations (Create, Read, Update, Delete) 

. Database integration (PostgreSQL/MySQL) 

. Multi-stage Docker build for optimized image size 

. Docker Compose orchestration (App + Database) 

. Environment-based configuration using .env 

. Secure container setup (non-root user, minimal base image) 

. One-command deployment using docker-compose up 

. Portable and production-ready architecture 
# Group Members 

. Aditya Bairagi 

. Aparna Sharma 

. Mimansa Kashyap 

. Harsh Gupta 

. Shubhanjali Roy 

. Sandhya Patidar
# Contribution 
README file structured and improved by Aditya Bairagi

Project description, objectives and feature section were refined for clarity.
# Clonclusion
The Containerized Sports Service project demonstrates how a Rust-based backend application can be efficiently deployed using Docker and Docker Compose. It ensures portability, security, and optimized performance through multi-stage builds and proper service orchestration. The system provides a scalable and production-ready architecture for managing sports data.
