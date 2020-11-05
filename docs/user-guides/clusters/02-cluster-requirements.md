---
id: 02-cluster-requirements
title: Kubernetes Cluster requirements
sidebar_label: Cluster requirements
slug: cluster-requirements
---

**Any Kubernetes Cluster** can be connected to the Platformer Console provided that it meets that following requirements.

The Platformer console is agnostic towards the underlying Infrastructure. _i.e._ It can be a self-managed cluster on an on-premise data center, a managed Kubernetes service (GKE/Anthos, EKS, AKS, RKE, etc), a k3s cluster running on a RaspberryPi or a Minikube cluster on your local machine.

[Read more on how Platformer Console connects to your Cluster](/user-guides/clusters/01-cluster-introduction/#understanding-how-the-platformer-console-connects-to-kubernetes-clusters)

### 1. Kubernetes version

Kubernetes version 1.16+

!!! important
    Clusters running older Kubernetes versions can be connected - but some features may not work due to breaking Kubernetes API changes. Platformer officially only supports clusters above v1.16.


### 2. Network requirements

- The Cluster should be able to access the Internet (applicable only for the public SaaS version of Platformer Console)

- If you are running in an isolated network or behind a firewall, it may be necessary to allow-list certain Platformer APIs. 

- The following URLs needs to be whitelisted on **egress** (Outbound) on port **443** if you are running behind a completely private network.

    - beta.api.platformer.com
    - beta.socket.platformer.com
    - api.platformer.com
    - socket.platformer.com
    - gcr.io
    - k8s.gcr.io

[Contact Platformer Support for more details.](https://platformer.atlassian.net/servicedesk/customer/portal/1)

### 3. Third-party tools

The Platformer Console utilizes the following services/components to handle ingress traffic and to generate SSL/TLS certificates from [Let's Encrypt](https://letsencrypt.org/).
These are only required if you have any public-web facing applications that require exposure to the internet.

- Metrics Server - [Installation Guide](/user-guides/clusters/third-party-tools/metrics-server/)
- Nginx or Traefik Ingress Controller - [Installation Guide](/user-guides/clusters/third-party-tools/ingress-controller)
- Jetstack Cert-Manager - [Installation Guide](/user-guides/clusters/third-party-tools/cert-manager)