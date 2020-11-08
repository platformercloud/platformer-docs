---
id: 02-creating-environments
title: Creating Environments
sidebar_label: Creating Environments
slug: creating-environments
---

## Before you begin

- [Read about how Environments work in Platformer.](/user-guides/environments/01-env-introduction/)
-   A Kubernetes cluster connected to the Platformer Console. [Read more on connecting a Kubernetes cluster here.](/user-guides/environments/01-env-introduction/)
-   One of the required permissions below (Platformer Console IAM).
    -   Organization Admin
    -   Operational Admin (Project-level)
    -   Environment Admin (Project-level)
    -   Environment Creator (Project-level)

## Creating a new Environment

1. Go to **Environments** on the main navigation panel.
2. Click the **Create** button in the Environments page.
3. Fill out the required values.

    - Environment Name*
    - Description*
    - Default Namespace*

        You can control what underlying namespace for this Environment will be named by filling in **Kubernetes Metadata > Namespace**. 
        Make sure this environment namespace does not collide with another Platformer managed environment namespace.

        !!! hint
            You can create any number of namespaces under this Environment later if you want your applications in the Environment to be further isolated with a namespace-per-application or namespace-per-application-group configuration.

    -  **Clusters** - Select the Kubernetes Clusters you want this Environment to be associated with. (When applications are deployed to this environment, they will be synchronized across all associated Clusters).


4. Click **Save** and your environment will be created in a few seconds.

## Next Steps

- [Setting up Multi Cluster Environments](/user-guides/environments/03-multi-cluster-environments/)
- [Add namespaces to the Environment](/user-guides/environments/04-environment-namespaces/)
- [Environment wide Configuration and Secrets](/user-guides/environments/05-configs-and-secrets/)