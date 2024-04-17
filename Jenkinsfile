pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo "Installing"
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
    }
}
}
