---
id: promoting-applications
title: Promoting Applications between Environments
sidebar_label: Promoting Applications between Environments
slug: promoting-applications
---

## Introduction

The Platformer Console allows you to easily 'promote' Applications from one Environment to another in one-click, even if the other Environment is associated with a completely different Cluster (or group of clusters). [(Read more)](/04-environments/introduction#associating-environments-with-different-clusters-multi-cluster-environments)

Before you can promote images between Environments, the Environments must be configured. (Different Environments can hold different Kubernetes resources such as configurations, secrets, etc.)

## 1. Adding a new Environment to an Application

-   Ensure that you have an Application configured in atleast one Environment.
-   Create a new Environment from the **Environments** page, and associate it to the same Cluster or a different one.

    1. First, we need to configure the new Environment. Navigate to the Application's page and click the Environment dropdown and select the new environment you want to promote to.

        ![](/assets/images//docs/promoting-1.png)

    2. When you select a new Environment for the first time, you will be given the option to **Configure the Environment** from scratch or **Import an existing Environment**. In this case we are promoting from Development to Staging, so we'll pick **Import Environment**.

        !!! hint
            - Select which **namespace** you want to use in your new Environment.
            - Select the environment you want to import from. ("Select app environment")
            - Check the kubernetes resources you want imported from the selected Environment.

        ![](/assets/images/docs/promoting-2.png)

    3. Click **COPY** and your new environment will be created with the checked resources copied over. This may take a while if there are multiple associated Clusters in the new Environment.

    4. You have now successfully

## 2. Promoting images between Environments

Once your application is configured with multiple environments, you can choose to 'manually promote' an image from one environment to another. _Eg. From 'Staging' to 'Production'._

!!! important "Controlled releases"
    If you want to manually promote images to an Environment, ensure that the Environment is set to **Manual Deploy** and not **Auto Deploy**.

1. Switch to the Environment you want to _promote from_.

2. Click the **PROMOTE** button in the **Application Overview**. Select the **target environment** to _promote to_.

    ![](/assets/images//docs/promoting-3.png)


