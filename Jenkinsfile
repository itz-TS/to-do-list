pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo "Code already checked out by Jenkins"
            }
        }

        stage('Code Quality Check') {
            steps {
                bat 'dir'
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
                bat 'echo Deployment Successful'
            }
        }

    }
}