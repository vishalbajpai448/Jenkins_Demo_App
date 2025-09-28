// Jenkinsfile for a SIMPLE web app deploying to a live S3 URL

pipeline {
    agent any

    environment {
        // --- Your Configuration ---
        S3_BUCKET_NAME     = 'my-mfe-demo-2025'
        AWS_CREDENTIALS_ID = 'aws-s3-credentials'
        AWS_REGION         = 'ap-south-1' // Or your bucket's region
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out the latest code from GitHub...'
                checkout scm
            }
        }

        stage('Deploy to S3') {
            when {
                branch 'main' // or 'master'
            }
            steps {
                echo "Deploying website to S3 bucket: ${env.S3_BUCKET_NAME}"
                withAWS(credentials: env.AWS_CREDENTIALS_ID, region: env.AWS_REGION) {
                    // Upload all files from the current directory
                    s3Upload(
                        file: '**',
                        bucket: env.S3_BUCKET_NAME,
                        path: '/'
                    )
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
            echo "✅ View your live site at: http://${env.S3_BUCKET_NAME}.s3-website.${env.AWS_REGION}.amazonaws.com"
        }
    }
}