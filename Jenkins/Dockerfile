FROM jenkins/jenkins:lts
USER root
# Installer les dépendances nécessaires et Docker
RUN apt-get update && \
    apt-get install -y apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
    apt-get update && \
    apt-get install -y docker-ce

# Installer la dernière version de docker-compose
RUN LATEST_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/') && \
    curl -L "https://github.com/docker/compose/releases/download/${LATEST_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose

# Installer la version LTS de Node.js
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

RUN gpasswd -a jenkins docker


USER jenkins
