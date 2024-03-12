pipeline {
    agent any

    environment {
        // Définissez les variables d'environnement nécessaires
        DOCKER_IMAGE_BACKEND = "monapp/backend"
        DOCKER_IMAGE_FRONTEND = "monapp/frontend"
    }

    stages {
        stage('Préparation') {
            steps {
                script {
                    // Nettoyer, préparer l'environnement
                    sh 'echo "Préparation de l\'environnement..."'
                }
            }
        }
        
        stage('Tests Backend') {
            steps {
                script {
                    dir('backend') {
                        // Exécutez vos tests de backend ici
                        sh 'echo "Exécution des tests backend..."'
                        // sh 'npm test'
                    }
                }
            }
        }
        
        stage('Tests Frontend') {
            steps {
                script {
                    dir('frontend') {
                        // Exécutez vos tests de frontend ici
                        sh 'echo "Exécution des tests frontend..."'
                        // sh 'npm test'
                    }
                }
            }
        }

        stage('Construction Docker Backend') {
            steps {
                script {
                    dir('backend') {
                        sh "docker build -t ${DOCKER_IMAGE_BACKEND} ."
                    }
                }
            }
        }

        stage('Construction Docker Frontend') {
            steps {
                script {
                    dir('frontend') {
                        sh "docker build -t ${DOCKER_IMAGE_FRONTEND} ."
                    }
                }
            }
        }

        stage('Déploiement') {
            steps {
                script {
                    // Utilisez docker-compose pour déployer votre application
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            // Nettoyage, notifications, etc.
            sh 'echo "Pipeline terminé."'
        }
    }
}
