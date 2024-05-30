# Administration in Kubernetes <!-- omit in toc -->

**Table of Contents**

- [Tools](#tools)
- [Plugins in Krew](#plugins-in-krew)
  - [Set up \& Installation](#set-up--installation)
  - [Set up](#set-up)
  - [How to use](#how-to-use)
    - [kubectx](#kubectx)
    - [kubens](#kubens)
    - [stern](#stern)
    - [kube-score](#kube-score)
    - [kube-allctx](#kube-allctx)
    - [kubectl-iexec](#kubectl-iexec)
    - [kor](#kor)
    - [kubescape](#kubescape)
    - [kubespy](#kubespy)
    - [kurt](#kurt)

## Tools

- kubectl
  - to interact with the clusters
- azure-cli
  - to interact with all Azure Resources
- [krew](https://github.com/kubernetes-sigs/krew "https://github.com/kubernetes-sigs/krew")
  - to install convenient plugins for kubectl

## Plugins in Krew

### Set up & Installation

```bash
alias k="kubectl"
alias kk="kubectl krew"

kk install ctx # a friendly context switcher
kk install ns # a friendly namespace switcher
kk install stern # log tailing of multiple pods
kk install score # static manifest analyzer, can be used with CI/CD
kk install allctx # fire commands to multiple contexts
kk install iexec # search and exec pod
kk install kor # discover unused resources
kk install kubescape # security scanner
kk install kubespy # temporarily add more libraries to the pod for debugging
kk install kurt # shortcut command to see what pods are recently restarted
```

### Set up

```bash
PROMPT=$PROMPT'$(kube_ps1)'
```

### How to use

#### [kubectx](https://github.com/ahmetb/kubectx "https://github.com/ahmetb/kubectx")

- a friendly context switcher

```bash
k ctx # list all contexts
```

```bash
k ctx nexplore-dev # switch to context `nexplore-dev`
```

```bash
k ctx - # switch to the previous context
```

#### [kubens](https://github.com/ahmetb/kubectx "https://github.com/ahmetb/kubectx")

- a friendly namespace switcher

```bash
k ns # list all namespaces
```

```bash
k ns core # switch to namespace core
```

#### [stern](https://github.com/rancher/stern "https://github.com/rancher/stern")

- log tailing of multiple pods

```bash
k stern apps -A  # log tailing all components with pattern `apps`
```

#### [kube-score](https://github.com/zegl/kube-score "https://github.com/zegl/kube-score")

- static manifest analyzer, can be used with CI/CD

```bash
helm template my-app | kube-score score -
```

#### [kube-allctx](https://github.com/onatm/kubectl-allctx "https://github.com/onatm/kubectl-allctx")

- fire commands to multiple contexts

```bash
k allctx get pods --like apps -A
```

#### [kubectl-iexec](https://github.com/gabeduke/kubectl-iexec "https://github.com/gabeduke/kubectl-iexec")

- search and exec pod

```bash
k iexec app # will show a list to select

# Use the arrow keys to navigate: ↓ ↑ → ←
# ? Select Pod:
#   Namespace: app | Pod: ▸ app-5d4c8755cb-aaaaa
#   Namespace: app | Pod: app-5d4c8755cb-bbbbb
# ↓ Namespace: app | Pod: app-background-job-6b577d899f-gnq4s
```

#### [kor](https://github.com/yonahd/kor "https://github.com/yonahd/kor")

- discover unused resources

```bash
k kor all
```

#### [kubescape](https://github.com/kubescape/kubescape "https://github.com/kubescape/kubescape")

- security scanner, operator is also available

```bash
k kubescape scan
```

#### [kubespy](https://github.com/huazhihao/kubespy "https://github.com/huazhihao/kubespy")

- temporarily add more libraries to the pod for debugging

```bash
kubectl spy my-app -n app
```

#### [kurt](https://github.com/soraro/kurt "https://github.com/soraro/kurt")

- a quick way to show all restarted resources

```bash
kubectl kurt all
```
