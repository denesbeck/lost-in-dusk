# LostInDusk.com 💾

My portfolio project to showcase my web development and DevOps skills.

## Architecture 🏗️

<div align="center">
    <img src="./public/lost_in_dusk_arch.svg" alt="Architecture" width="70%">
</div>

## Tech Stack 💻

| **Category** | **Technology**                                                               |
| ------------ | ---------------------------------------------------------------------------- |
| **Frontend** | React (Vite)                                                                 |
|              | Chakra UI                                                                    |
|              | Tailwind CSS                                                                 |
| **Backend**  | AWS S3                                                                       |
|              | AWS SES                                                                      |
|              | AWS API Gateway                                                              |
|              | AWS ACM (Certificate Manager)                                                |
|              | AWS Route 53                                                                 |
|              | Terraform ([lost-in-dusk-tf](https://github.com/denes-beck/lost-in-dusk-tf)) |

## Deployment ⚡

Deployed using **GitHub Actions** for continuous integration and delivery.

## Continuous Integration 🛠️

The CI workflow includes:

- **GitGuardian**: 🛡️ Monitors sensitive data in code.
- **SonarQube**: 🔍 Performs static code analysis.
- **Linter**: ✔️ Enforces coding standards.

## Contact Form 📬

Secured with Google reCAPTCHA v3 to prevent spam.

## Getting Started 🚀

1. Clone this repository: `git clone https://github.com/denes-beck/lost-in-dusk.git`
2. Navigate to the project directory: `cd lost-in-dusk`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
