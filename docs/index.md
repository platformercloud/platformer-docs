---
title: Overview
---

# Platformer Console

The Cloud Native Application Platform built for Kubernetes

> A hassle-free enterprise-grade application platform to simplify and streamline your Kubernetes experience on Cloud, Hybrid, On-Premise or Edge Infrastructure.


## Objectives

- To enable you to centrally manage the development, deployment and monitoring of cloud native applications.
- To accelerate the development cycle by enabling developers and operations to work together in a whole new way.
- To allow you to develop apps for vendor-neutral Kubernetes in a cloud agnostic manner.

![](/assets/images//docs/markitecture.jpg)


## Features

### Connect to any Kubernetes Cluster
Provider-agnostic connectivity to any Kubernetes Cluster whether its public, private, on-premise or on your laptop.

![](/assets/images/docs/cluster-connections-overview.png)

### Applications and Workloads
Platformer enables developers and teams to deploy, manage and monitor applications and workloads on Kubernetes without having to worry about the underlying infrastructure.

- **Containers**

    Platformer provides a simple, streamlined yet flexible process for creating and managing Deployments, Stateful Sets, Jobs and Cronjobs on Kubernetes.

    Create and deploy Containers from any integrated Container Registry with minimal effort. Configure Sidecars and Init Containers on your applications with no-effort.

    ![](/assets/images//docs/app-overview.png)

- **Configurations and Secrets**

    Apply/mount versioned configurations and encrypted secrets from Vault directly into your applications with a few clicks.
    
    ![](/assets/images//docs/config-mount-0.png)

- **Auto-scaling**

    Platformer creates and manages the necessary services on your clusters to horizontally or vertically scale your applications and workloads.

    ![](/assets/images//docs/scaling.png)

- **DNS and Load-balancing**

    - Supports multi-port mappings and fan-out ingress configurations
    - Automated TLS(HTTPS) Certificate rotation using LetsEncrypt
    - Supports custom Certificate Providers through cert-manager
    - Supports Nginx and Traefik Ingress Controllers out of the box (but support is available for other controllers)

- **Volumes**

    Easily integrate available Storage Classes and NFS servers on your Kubernetes clusters to provide volumes for your stateful applications.

    ![](/assets/images//docs/volumes.png)

### Manage multiple Environments

Separate environments for development, staging, UAT and production (etc) can be easily created and managed with appropriate configurations.

Having a consistent process to create and manage the many environments (development, staging, test, UAT, production, etc) that your development teams depend on is key to achieving stable and high-velocity release cycles.

Platformer creates and manages environments in multiple configurations and provides your teams with the tools to easily deploy, manage and monitor workloads on your Kubernetes clusters.

![](/assets/images//docs/environments.png)


- **Create multiple environments on the same Cluster.**
  
    Platformer configures the namespacing and other underlying network and security policies to achieve optimal isolation between your different environments.


- **Create environments that span across different Clusters.**
  
    Create Multi-Cluster environments that are synchronized across any number of Clusters in your project. Multi-cluster environments provide a cookie-cutter approach to building highly resilient, disaster-recoverable systems with ease.

    ![](/assets/images//docs/multi-cluster.png)

- **Restrict permissions and access to environments** (and applications running in those environments) using Platformer IAM.


- **Promote applications between environments.**
  
    Promote containers between environments with a single-click (manual approval) or enable continuous deployment pipelines that makes use of advanced deployment strategies such as blue/green and canary releases with a few clicks.

    ![](/assets/images//docs/promotion.png)


- **Environment-level audit logs and metrics**
  
    Every change to made to an environment is logged and audited so you're always on top of your application infrastructure. Easily Monitor application metrics that span multiple clusters (multi-cluster environments).

### Multi Cluster and Multi Cloud Support

>  Synchronize environments and applications between multiple Kubernetes clusters to create highly-resilient systems.

Platformer breaks-out your application layer from any and all underlying provider/vendor specific lock-ins (this includes Platformer itself - you are never locked in) allowing you to migrate entire workloads and environments between different clusters with a few clicks of a button.

### Centralized Configuration

Easily create, version and apply any kind of configuration (config files, service accounts, .env files, etc) or sensitive secrets to your applications.

Platformer utilizes Hashicorp Vault to encrypt and securely store your sensitive credentials/secrets and injects/mounts them into your applications. But depending on your compliance requirements you can always 'Bring your own Vault' and plug it in.

![](/assets/images//docs/vault.png)

### Industry-strength Integrations
From git repositories, CI/CD tools to monitoring and observability tools and container registry integrations are supported.

Integrate any Container Registry of choice to your projects. Platformer will apply the necessary configurations to all connected clusters so that your teams can seamlessly utlize your Continuous Integration pipelines to deploy to any environment.

![](/assets/images//docs/registry.png)

