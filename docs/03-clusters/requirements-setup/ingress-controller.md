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


### Installing Nginx Ingress Controller

Please follow the steps for your specific Kubernetes infrastructure provider: https://kubernetes.github.io/ingress-nginx/deploy/

### Installing Traefik Ingress Controller

Please follow the steps for your specific Kubernetes infrastructure provider: https://doc.traefik.io/traefik/v1.7/user-guide/kubernetes/
