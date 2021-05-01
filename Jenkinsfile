node {
  
        stage('Build') {
            
                echo 'Building..'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/khetreJagdish/Angular-8.git']]])
        
        }
        stage('Test') {
           
                echo 'Testing..'
            
        }
        stage('Deploy') {
            
                echo 'Deploying....'
            
        }
}
