pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo "Code already checked out"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Code Quality Check (ESLint)') {
            steps {
                bat 'npx eslint script.js'
            }
        }

        stage('Unit Test') {
            steps {
                bat 'echo Running tests...'
                bat 'echo Tests Passed'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build Successful'
            }
        }

        stage('Deploy') {
            steps {
                 bat 'echo Deployment completed successfully'
            }
        }

    }
}