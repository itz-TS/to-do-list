pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo "Cloning repository..."
                git 'https://github.com/itz-TS/devops-todo-project.git'
            }
        }

        stage('Code Quality Check') {
            steps {
                bat 'dir'
            }
        }

        stage('Unit Test') {
            steps {
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
                bat 'echo Deployment Done'
            }
        }

    }
}