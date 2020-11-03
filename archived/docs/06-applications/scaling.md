---
id: scaling
title: Scaling
sidebar_label: Scaling
slug: scaling
---

## Changing the number of Replicas

The number of replicas running (for an Application of type `Deployment`) can be configured easily through the Application Overview by clicking on the ➕ and ➖ buttons.

![](/img/docs/scaling-1.png)

---

## Setting up Horizontal Autoscaling

To set up Horizontal Autoscaling, navigate to the **Scaling** tab.

1. Configure the minimum and maximum number of replicas.
2. Add a metric threshold by clicking **+ CREATE** in the metrics card.
> Currently supported metrics are **CPU** and **Memory** usage.
    *Eg. (below) Scale up if the average CPU utilization across all replicas exceed 50%.*

![](/img/docs/scaling-2.png)

---

## Setting up Vertical Autoscaling

:::tip Work in progress
Vertical Autoscaling is currently in development. Contact support if you would like this feature to be released ahead of time.
:::