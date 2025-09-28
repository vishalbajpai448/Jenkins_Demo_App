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
        // The unnecessary 'Checkout Code' stage has been REMOVED.
        // Jenkins automatically checks out the code before this.

        stage('Deploy to S3') {
            when {
                branch 'main' 
            }
            steps {
                echo "Deploying website to S3 bucket: ${env.S3_BUCKET_NAME}"
                
                // This will show us the files are present in the log
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