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
                script {
                    echo "Changing permissions of test.sh"
                    sh 'chmod +x ./jenkins/scripts/test.sh'
                    echo "Executing test.sh"
                    sh './jenkins/scripts/test.sh'
                }
            }
        }
}
}
