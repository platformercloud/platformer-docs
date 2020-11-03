---
id: volumes
title: Volumes
sidebar_label: Volumes
slug: volumes
---

## Overview

Volumes are required for stateful applications that need access to a local file system (either for storing state or persisting data). While this is not recommended for cloud-native applications, Kubernetes and the Platformer Console support attaching volumes to your Applications that may require this feature.

- The Platformer Console supports all standard Kubernetes volume types and storage classes (or custom storage classes) installed in your Cluster.

- Most standard Persistent Volumes from Cloud Providers are `ReadWriteOnce`, meaning your application will not be able to scale. You may need to set up a distributed file system such as an NFS Server in order to scale.

- The Console cannot validate if your application architecture is compatible with the Volumes that you create through it - it only provides an interface to easily set up and mount volumes to your application containers. For additional support with volumes or legacy application migrations, please contact Platformer Support.

## Creating and attaching a Volume to an Application

1. Navigate to the **Volumes** tab in the Application Overview and click **+ CREATE**.

2. Follow the 'Create a Volume' wizard to set up the required volume. If your Volume type (and storage class) supports it, you can easily mount multiple containers in your Application to the same Volume.  

    ![](/assets/images//docs/volumes-1.png)

3. In the next step, select which containers you want to mount your volume to and the paths you want it mounted to.

    ![](/assets/images/docs/volumes-2.png)

4. Click **FINISH**.