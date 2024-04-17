pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git url: 'https://github.com/madhurashinde/github-actions', branch: 'main'
            }
        }
        stage('Setup Node.js') {
            steps {
                // Install Node.js using Node.js tool installer
                // You may need to configure Node.js installations in Jenkins Global Tool Configuration
                // Replace 'nodejs' with the name of your configured Node.js installation
                tool name: 'nodejs', type: 'org.jenkinsci.plugins.tools.ToolInstallation'
            }
        }
        stage('Install dependencies') {
            steps {
                // Execute npm install to install project dependencies
                sh 'npm install'
            }
        }
        stage('Run server tests') {
            steps {
                // Execute npm test to run server tests
                sh 'npm test'
            }
        }
    }
}
