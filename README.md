
# 🚀 CI/CD Pipeline for Node.js Sample App

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/statusYasirunk9612/ci-cd-app/.github/workflows/ci-cd.yml?branch=main)
![Docker Pulls](https://img.shields.io/docker/pulls/yasiru75/ci-cd-app)

---

## 📜 Project Description

This project demonstrates how to build a **complete CI/CD pipeline** using:

- **GitHub Actions** for automation
- **Docker** for containerization
- **AWS EC2** for deployment

Every push to the `main` branch will:

1. **Build the app**
2. **Run tests**
3. **Build and push a Docker image to Docker Hub**
4. **Deploy automatically to an AWS EC2 instance**

---

## 🌐 **Live Deployment**

👉 [Visit Live App](http://54.226.170.205/) 🔥

---

## 🏗️ Project Architecture

```plaintext
GitHub Repo (Source Code)
        ↓
GitHub Actions (CI/CD Workflow)
        ↓
Docker Hub (Container Registry)
        ↓
AWS EC2 (Deployment Server)
```

---

## 🔧 Tech Stack

| Layer             | Tool                                             |
| ----------------- | ------------------------------------------------ |
| Source Code       | GitHub                                           |
| CI/CD Pipeline    | GitHub Actions                                   |
| Containerization  | Docker                                           |
| Deployment Target | AWS EC2 (Ubuntu Server + Docker Engine)          |
| Language          | Node.js with Express                             |

---

## 📂 Project Structure

```plaintext
sample-app/
├── app/
│   ├── index.js          # Node.js app
│   └── package.json
├── Dockerfile             # Container build file
└── .github/
    └── workflows/
        └── ci-cd.yml      # CI/CD pipeline config
```

---

## 🚀 How the CI/CD Pipeline Works

### ✅ On Every Push to `main`:

1. **Checkout Code**
2. **Install Dependencies**
3. **Run Tests**
4. **Build Docker Image**
5. **Push Docker Image to Docker Hub**
6. **SSH to AWS EC2**
7. **Pull Latest Image and Restart Container**

---

## 🚢 Deployment on AWS EC2

### ✔️ Steps:

1. **Provision EC2 Instance:**

- Launch an EC2 instance (Ubuntu).
- Open ports `22`, `80`, `443` (if HTTPS) in Security Group.

2. **Install Docker:**

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
```

3. **Set Up GitHub Secrets:**

| Secret Name       | Value                                  |
| ----------------- | -------------------------------------- |
| DOCKER_USERNAME   | Your Docker Hub username              |
| DOCKER_PASSWORD   | Your Docker Hub password or PAT       |
| SERVER_IP         | EC2 public IP                         |
| SERVER_USER       | ubuntu (default for Ubuntu EC2)       |
| SERVER_SSH_KEY    | Your EC2 private key (base64 encoded) |

4. **Pipeline Deployment Script:**

```bash
docker pull your-docker-username/sample-app:latest
docker stop sample-app || true
docker rm sample-app || true
docker run -d --name sample-app -p 80:3000 your-docker-username/sample-app:latest
```

---

## 📝 To Do Next

- ✅ Add unit tests
- ✅ Configure HTTPS (optional with NGINX + Certbot)
- 🚀 Scale with Docker Compose or Kubernetes (future)
- 📈 Add monitoring (Prometheus, Grafana)

---

## 💼 Author

- 👨‍💻 **Yasiru Nisal**
- 🌐 [LinkedIn](https://www.linkedin.com/in/yasiru-nisal/)
- 🐙 [GitHub](https://github.com/Yasirunk9612)

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐️ Show Your Support

If you found this helpful:

- ⭐️ Star the repo
- 🍴 Fork it
- 🔗 Share it with others

---

## 🔥 Deployment Link

👉 **Live Demo:** [http://YOUR_EC2_PUBLIC_IP](http:54.226.170.205/)

---

## ✅ Screenshots (Optional)

_Add screenshots of the deployment, pipeline running, or terminal outputs._

---

