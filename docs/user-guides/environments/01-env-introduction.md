---
id: 01-env-introduction
title: Environments
sidebar_label: Introduction
slug: introduction
---

## Introduction to Environments

An **Environment** in the Platformer Console is an isolated development and deployment workspace for your Kubernetes Applications and other associated configurations and secrets.  

You can create any number of Environments and configure them as required. Platformer provides a mechanism to create multiple Environments in the same Kubernetes Cluster or spread them across multiple Clusters. 

![](/assets/images//docs/env-1.png)

### Your CI/CD Pipeline

The Platformer Console sits as the Continuous Delivery/Deployment mechanism in your CI/CD Pipeline and manages application deployment to different 'environments' and makes it easy to 'promote' applications across these environments.

![](/assets/images//docs/env-2.png)

!!! hint
    Platformer Console integrates easily with **any** existing CI pipeline (be it Jenkins, Github actions, Cloud Build, CircleCI, etc.). The console takes up after the Container images are built and stored in a Container registry in your CI pipeline and manages the Continuous Deployment of your applications to your Kubernetes environments.

### Deploying to Environments

The Platformer Console provides two main mechanisms to deploy your application containers to different Environments.
#### Auto Deployment
Applications are automatically deployed to an Environment once the container image is built

#### Manual Deployment
Applications can be manually *promoted* from one environment to another with a single-click from an authorized user. This is useful in scenarios where you need controlled releases (eg. promoting a release from staging to production).

### Associating Environments with different Clusters (Multi-cluster Environments)

You can easily create 'Multi-Cluster' deployments that are synchronized between a number of different Kubernetes Clusters. The Clusters associated with an Environment can be running on different infrastructure/cloud providers.

Through the Platformer Console you deploy your application to an Environment, and Platformer takes care of deploying your applications to all associated Clusters in that Environment making highly resilient solutions and multi-cloud/multi-cluster deployments a breeze to set up and manage.

![](/assets/images//docs/env-3.png)

### Centralized management of Configurations and Secrets

All application configurations and secrets (config files, database connection strings, service keys, API Keys, .env files, etc.) can be *centrally* managed through the Platformer Console. 

All config and secret files and values are
- Encrypted on a managed [Hashicorp Vault](https://www.hashicorp.com/products/vault) in the Platformer Console SaaS version. (You can use your own Vault with a dedicated installation of the Platformer Console on your infrastructure).
- Easily applied and mounted to your applications with a few clicks.
- Versioned (Allows you to rollback to any previous versions).

The Console automatically applies the required configurations and secrets into your applications when deploying to different environments.

![](/assets/images//docs/env-4.png)
