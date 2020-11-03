---
id: healthchecks
title: Health Checks
sidebar_label: Health Checks
slug: healthchecks
---

!!! note
    Kubernetes Health Checks can be used to ensure smooth updates ("Rolling updates") with zero-downtime. Health checks ensure that a new container is healthy and able to handle traffic before the old container is destroyed.

## Creating a Health Check

1. Navigate to the **Health Checks** tab under the Application Overview and follow the set up wizard to completion.
 
- You can choose to enable or disable Liveliness and/or Readiness Probes for your container.
- If you have multiple containers that require health checks, they must be added individually to each container.
- Health checks can be edited later at any time.

![](/assets/images//docs/healthchecks-1.png)

## Liveliness Probes *vs.* Readiness Probes

- Liveliness Probes are run continuously on your container, throughout it's lifetime. If the liveliness probe fails, the container is shut down and recreated.
- Readiness Probes are only run at the start of your container, before the 'existing/old' container is shut down. If the readiness probe fails, the upgrade is not carried out.

[Read more about Kubernetes Container Probes](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes)