node {
  
        stage('Build') {
            
                echo 'Building..'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'git@github.com:khetreJagdish/Angular-8.git']]])
        
        }
        stage('Test') {
           
                echo 'Testing..'
            
        }
        stage('Deploy') {
            
                echo 'Deploying....'
            
        }
}
