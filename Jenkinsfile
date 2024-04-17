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
                chmod +x ./jenkins/scripts/test.sh
                sh './jenkins/scripts/test.sh'
            }
    }
}
}
