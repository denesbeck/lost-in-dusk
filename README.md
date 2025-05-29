# LostInDusk.com 💾

My portfolio project to showcase my web development and DevOps skills.

## Architecture 🏗️

<div align="center">
    <img src="./public/lost_in_dusk_arch.svg" alt="Architecture" width="70%">
</div>

## Tech Stack 💻

| **Category** | **Technology**                                                              |
| ------------ | --------------------------------------------------------------------------- |
| **Frontend** | React (Vite)                                                                |
|              | Material UI                                                                 |
|              | Tailwind CSS                                                                |
| **Backend**  | AWS S3                                                                      |
|              | AWS CloudFront                                                              |
|              | AWS API Gateway                                                             |
|              | AWS Lambda                                                                  |
|              | AWS Route 53                                                                |
|              | AWS ACM (Certificate Manager)                                               |
|              | AWS SES                                                                     |
|              | Terraform ([lost-in-dusk-tf](https://github.com/denesbeck/lost-in-dusk-tf)) |

## Deployment ⚡

Deployed using **GitHub Actions** for continuous integration and delivery.

## Continuous Integration 🛠️

The CI workflow includes:

- **GitGuardian**: 🛡️ Monitors sensitive data in code.
- **SonarQube**: 🔍 Performs static code analysis.
- **Linter**: ✔️ Enforces coding standards.

## Contact Form 📬

Secured with [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) to prevent spam.

## Getting Started 🚀

1. Clone this repository: `git clone https://github.com/denesbeck/lost-in-dusk.git`
2. Navigate to the project directory: `cd lost-in-dusk`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
