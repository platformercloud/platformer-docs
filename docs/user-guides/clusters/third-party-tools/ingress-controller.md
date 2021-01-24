---
id: ingress-controller
title: Setting up an Ingress Controller
sidebar_label: Setting up an Ingress Controller
slug: ingress-controller
---

## Supported Ingress Controllers

The Platformer Console currently supports both [Nginx](https://kubernetes.github.io/ingress-nginx/) and [Traefik](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) Ingress Controllers for Kubernetes.

!!! note 
    To extend support to a different Ingress Controller, please contact Platformer Support.

!!! tip 
    You only need to install one Ingress Controller on your Cluster. If you do want to configure a [Multi-Cluster Environments](/04-environments/multi-cluster-environments), please ensure that you install the same version of the Ingress Controller across all clusters that you want to use.


## Before you begin

- Ensure that you have a cluster connected at Platformer Console. [Read more on Cluster Connection here](/user-guides/clusters/03-connecting-clusters/)

## Installing Nginx Ingress Controller

### Using Platformer Shell

1. [Access Kubectl Shell from the Console](/user-guides/clusters/04-kubectl-shell/)
2. Run the following commands

    ```
    kubectl create ns nginx-ingress
    ```

    ```
    helm repo add stable https://charts.helm.sh/stable
    ```

    ```
    helm install nginx-ingress stable/nginx-ingress \
    --set rbac.create=true \
    --set controller.service.type=LoadBalancer \
    --set controller.metrics.enabled=true \
    --set controller.stats.enabled=true \
    --namespace nginx-ingress
    ```

### Manual Install

Please follow the steps for your specific Kubernetes infrastructure provider: [Nginx Ingress Installation Guide](https://kubernetes.github.io/ingress-nginx/deploy/)

## Installing Traefik Ingress Controller

Please follow the steps for your specific Kubernetes infrastructure provider: [Treafik Installation Guide](https://doc.traefik.io/traefik/v1.7/user-guide/kubernetes/)
