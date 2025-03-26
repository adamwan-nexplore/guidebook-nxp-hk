# SonarQube <!-- omit in toc -->

## What is it

[SonarQube](https://www.sonarsource.com) is an automatic tool to detect errors and fix style issues statically

## [SonarQube in Docker](https://docs.sonarsource.com/sonarqube/latest/setup-and-upgrade/install-the-server/installing-sonarqube-from-docker "https://docs.sonarsource.com/sonarqube/latest/setup-and-upgrade/install-the-server/installing-sonarqube-from-docker")

### Set up the server through Docker

```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

1. Go to `http://localhost:9000`
2. Type username `admin` and password `admin`

### [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode "https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode")

SonarLint is a VSCode extension that provides real-time SonarQube linting and code analysis
