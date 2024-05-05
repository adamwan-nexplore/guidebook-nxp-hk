# Administration in Kubernetes

## 1. Tools
- kubectl
    - to interact with the clusters
- azure-cli
    - to interact with all Azure Resources
- [krew](https://github.com/kubernetes-sigs/krew "https://github.com/kubernetes-sigs/krew")
    - to install convenient plugins for kubectl

## 2. Plugins in Krew

### 2.1 Set up & Installation
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

### 2.2 Set up
```bash
PROMPT=$PROMPT'$(kube_ps1)'
```

### 2.3 How to use

#### 2.3.1 [kubectx](https://github.com/ahmetb/kubectx "https://github.com/ahmetb/kubectx")

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

#### 2.3.2 [kubens](https://github.com/ahmetb/kubectx "https://github.com/ahmetb/kubectx")

- a friendly namespace switcher

```bash
k ns # list all namespaces
```

```bash
k ns core # switch to namespace core
```

#### 2.3.3 [stern](https://github.com/rancher/stern "https://github.com/rancher/stern")

- log tailing of multiple pods

```bash
k stern apps -A  # log tailing all components with pattern `apps`
```

#### 2.3.4 [kube-score](https://github.com/zegl/kube-score "https://github.com/zegl/kube-score")

- static manifest analyzer, can be used with CI/CD

```bash
helm template my-app | kube-score score -
```

#### 2.3.5 [kube-allctx](https://github.com/onatm/kubectl-allctx "https://github.com/onatm/kubectl-allctx")

- fire commands to multiple contexts

```bash
k allctx get pods --like apps -A
```


#### 2.3.6 [kubectl-iexec](https://github.com/gabeduke/kubectl-iexec "https://github.com/gabeduke/kubectl-iexec")

- search and exec pod

```bash
k iexec app # will show a list to select

# Use the arrow keys to navigate: ↓ ↑ → ← 
# ? Select Pod: 
#   Namespace: app | Pod: ▸ app-5d4c8755cb-4rrmq
#   Namespace: app | Pod: app-5d4c8755cb-fwqfc
# ↓ Namespace: app | Pod: app-background-job-6b577d899f-gnq4s
```

#### 2.3.7 [kor](https://github.com/yonahd/kor "https://github.com/yonahd/kor")

- discover unused resources

```bash
k kor all
```

#### 2.3.8 [kubescape](https://github.com/kubescape/kubescape "https://github.com/kubescape/kubescape")

- security scanner, operator is also available

```bash
k kubescape scan
```

#### 2.3.9 [kubespy](https://github.com/huazhihao/kubespy "https://github.com/huazhihao/kubespy")

- temporarily add more libraries to the pod for debugging

```bash
kubectl spy myapp -n app
```


#### 2.3.10 [kurt](https://github.com/soraro/kurt "https://github.com/soraro/kurt")

- a quick way to show all restarted resources

```bash
kubectl kurt all
```