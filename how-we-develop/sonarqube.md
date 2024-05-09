# SonarQube

## 0. What is it

- [SonarQube](https://www.sonarsource.com) is an automatic tool to detect errors and fix style issues statically

## 1. [SonarQube in Docker](https://docs.sonarsource.com/sonarqube/latest/setup-and-upgrade/install-the-server/installing-sonarqube-from-docker "https://docs.sonarsource.com/sonarqube/latest/setup-and-upgrade/install-the-server/installing-sonarqube-from-docker")

### Set up the server through Docker

```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

### 2. [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode "https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode")

