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
        // NOTE: The 'when' block has been completely removed from this stage.
        stage('Deploy to S3') {
            steps {
                echo "Deploying website to S3 bucket: ${env.S3_BUCKET_NAME}"
                
                // This will show us the files are present
                sh 'ls -la'
                
                withAWS(credentials: env.AWS_CREDENTIALS_ID, region: env.AWS_REGION) {
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