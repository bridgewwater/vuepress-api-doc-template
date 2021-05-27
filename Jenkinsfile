pipeline {
    agent {
        docker {
            image 'node:15.14.0-alpine'
            args '-p 8000:8000'
        }
    }
    options {
        timeout(time: 1, unit: 'HOURS')
        buildDiscarder(logRotator(numToKeepStr:'10'))
    }
    stages {
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('dev') {
            steps {
                sh 'chmod 777 ./script/*.sh'
                sh './script/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './script/kill.sh'
            }
		}
    }
}

// post {
//     always {
//         echo 'Clean up workspace'
//         deleteDir()
//     }
// }