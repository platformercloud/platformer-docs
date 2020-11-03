---
id: pod-events-logs-metrics
title: Events, Logs and Metrics
sidebar_label: Events, Logs and Metrics
slug: pod-events-logs-metrics
---

> The Platformer Console does not store historical metrics data or retain logs. It provides _just-in-time_ metrics and access to Pod logs to enable developers to debug issues with their Kubernetes deployments.

### Events

The Pod Events can be quite useful to quickly debug issues with failing containers, missing configurations or volumes.

![](/img/docs/events-1.png)

### Pod Logs

Logs can be accessed from each running Pod in your Application. To see logs from a failed/restarted Pod, check the **Display previous logs** switch.

![](/img/docs/pod-logs.png)

### Resource Usage

Resource usage from your application's Pods can be viewed from the Application Overview. Note that these are just-in-time metrics and will not capture any spikes or drops over time.

![](/img/docs/metrics-1.png)