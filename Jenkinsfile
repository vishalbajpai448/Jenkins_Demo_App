// Jenkinsfile for a SIMPLE web app deploying to a live S3 URL

pipeline {
    agent any

    environment {
        // --- Your Configuration ---
        S3_BUCKET_NAME     = 'my-mfe-demo-2025'
        AWS_CREDENTIALS_ID = 'aws-s3-credentials'
        AWS_REGION         = 'ap-south-1'
    }

    stages {
        // NOTE: The 'when' block has been removed to ensure deployment.
        stage('Deploy to S3') {
            steps {
                echo "Deploying website to S3 bucket: ${env.S3_BUCKET_NAME}"
                
                sh 'ls -la'
                
                // This block still securely provides our AWS keys
                withAWS(credentials: env.AWS_CREDENTIALS_ID, region: env.AWS_REGION) {
                    // **THE FIX:** Replace s3Upload with a more reliable aws s3 sync command
                    sh "aws s3 sync . s3://${S3_BUCKET_NAME} --delete"
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