---
id: 03-multi-cluster-environments
title: Multi-Cluster Environments
sidebar_label: Multi-Cluster Environments
slug: multi-cluster-environments
---

### Associating multiple clusters to an Environment

Platformer Console allows you to build highly-resilient solutions utilizing multiple Kubernetes Clusters. These clusters can be running and managed on different infrastructure/cloud providers. 

When a new Cluster is associated with an existing Environment, the Console will automatically synchronize all workloads, configurations, secrets and other resources configured in the Environment to the newly associated Cluster.

### To add a new Cluster to an existing Environment

1. Select the **Environment** you want to add the new Cluster(s) in the **Environments Page**.
2. Click the **Associate Cluster** button in the **Associated Clusters Card** in Environment Settings > General.

![](/img/docs/env-clusters-1.png)

3. Select the Cluster you want to add from the dialog.
4. Click **Save**. Your new cluster will be brought up-to-date with the other clusters in your Environment. (Depending on the number of workloads running in your Environment this may take a while).

