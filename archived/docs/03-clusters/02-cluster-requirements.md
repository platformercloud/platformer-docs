---
id: 02-cluster-requirements
title: Kubernetes Cluster requirements
sidebar_label: Cluster requirements
slug: cluster-requirements
---

**Any Kubernetes Cluster** can be connected to the Platformer Console provided that it meets that following requirements.

The Platformer console is agnostic towards the underlying Infrastructure. _i.e._ It can be a self-managed cluster on an on-premise data center, a managed Kubernetes service (GKE/Anthos, EKS, AKS, RKE, etc), a k3s cluster running on a RaspberryPi or a Minikube cluster on your local machine.

### 1. Kubernetes version

Kubernetes version 1.16+

<small>
Clusters running older Kubernetes versions can be connected - but some features may not work due to breaking Kubernetes API changes. Platformer officially only supports clusters above v1.16.
</small>

### 2. Network requirements

The Cluster should be able to access the Internet (applicable only for the public SaaS version of Platformer Console)

If you are running in an isolated network or behind a firewall, it may be necessary to allow-list certain Platformer APIs. [Contact Platformer Support for more details.](https://platformer.atlassian.net/servicedesk/customer/portal/1)

### 3. Third-party services

The Platformer Console utilizes the following services/components to handle ingress traffic and to generate SSL/TLS certificates from [Let's Encrypt](https://letsencrypt.org/).
These are only required if you have any public-web facing applications that require exposure to the internet.

1. Nginx or Traefik Ingress Controller [(setup instructions)](./requirements-setup/ingress-controller)
1. Jetstack Cert-Manager [(setup instructions)](./requirements-setup/cert-manager)