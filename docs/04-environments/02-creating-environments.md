---
id: 02-creating-environments
title: Creating Environments
sidebar_label: Creating Environments
slug: creating-environments
---

## Prerequisites

-   A Kubernetes cluster connected to the Platformer Console. [(See connecting a Kubernetes cluster)](../connecting-clusters)
-   One of the required permissions below (Platformer Console IAM).
    -   Organization Admin
    -   Operational Admin (Project-level)
    -   Environment Admin (Project-level)
    -   Environment Creator (Project-level)

## Creating a new Environment

1. Go to **Environments** on the main navigation panel.
2. Click the **Create** button in the Environments page.
3. Fill out the required values.

> -   You can control what underlying namespace for this Environment will be named by filling in **Kubernetes Metadata > Namespace**. Optionally you can leave this out and a name will be generated.
> -   You can create any number of namespaces under this Environment later if you want your applications in the Environment to be further isolated with a namespace-per-application or namespace-per-application-group configuration.
> -   **Clusters** - Select the Kubernetes Clusters you want this Environment to be associated with. (When applications are deployed to this environment, they will be synchronized across all associated Clusters).

![](/img/docs/env-add-1.png)

4. Click **Save** and your environment will be created in a few seconds.