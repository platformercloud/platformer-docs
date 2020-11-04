---
id: 04-environment-namespaces
title: Configuring Namespaces in Environments
sidebar_label: Configuring Namespaces in Environments
slug: environment-namespaces
---
!!! note
    This feature requires an understanding of [Kubernetes Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) and building deployment architectures that can utilize the isolation provided by namespaces. This is an advanced customization feature that may not be required in most cases.

## Understanding the relationship between Environments and Namespaces.

The Platformer Console allows you to deploy and manage Applications and related configurations to an _Environment_.

By default, one Environment is mapped to one Kubernetes namespace. <br/>
_i.e. All applications in one Environment are deployed to a specific namespace on your connected Kubernetes Clusters._

But depending on your requirements you can optionally create more complex isolation levels using Environments and namespaces.

-   Create a namespace per application in an Environment.
-   Create a namespace for a group of applications in an Environment.

The applications will still be deployed to the *Environment*, but by using this feature you can control the namespaces it is deployed to, underneath the hood (useful for configuring Network Security Policies etc. at a namespace level).

Platformer Console provides you with flexible tooling to configure any (or a combination) of these patterns for your deployments.

## Creating multiple namespaces in an Environment.

1. **Environments** > Select an Environment
2. **Environment Settings** > **Namespaces** Tab
3. Click **Create**
4. The new namespace will be associated under this Environment and you can specify which namespace your want your application(s) deployed in when you create a new Application.

!!! info
    When a new namespace is created in an Environment, it will be created in all Clusters associated to that environment. [Read more on Multi-cluster environments](./introduction#associating-environments-with-different-clusters-multi-cluster-environments).