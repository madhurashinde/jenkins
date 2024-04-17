pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git url: 'https://github.com/YashBharambay/github-actions'
            }
        }
        stage('Build') {
            steps {
                // Execute any necessary build steps
                // For UI tests, this might involve building the application
                echo "Building.."
                sh 'npm install' // Or any other build command
            }
        }
        stage('Test') {
            steps {
                // Execute the UI tests defined in ui.yml
                // Replace this command with your actual test command
                echo "Testing.."
                sh 'npm test --file ui.yml'
            }
        }
    }
}
