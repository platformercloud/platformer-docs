---
id: pod-ssh
title: SSH into Pods
sidebar_label: SSH into Pods
slug: pod-ssh
---

The Platformer Console allows Developers to easily SSH into Application Pods to debug issues that may be related to missing configurations, volumes, bad mount paths, etc. 

1. Open the Pod Menu for a running replica in the **Application Overview** and select **SSH**.

    ![](/assets/images//docs/pod-ssh-1.png)

2. Once the **in-browser Kubectl shell** opens, hit the *Enter* key to SSH into the Pod. (SSH defaults to the first container in the Pod, you can change this by editing the `kubectl exec` command before hitting Enter).

    ![](/assets/images//docs/pod-ssh-2.png)