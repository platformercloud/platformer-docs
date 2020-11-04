---
id: containers
title: Configuring Containers
sidebar_label: Configuring Containers
---

## Adding a Container to an Application

With the Platformer Console you can add multiple Containers to your Application (Deployment / Job / StatefulSet / CronJob **Pod**).

Each container can be configured to a different [Image Collection](/05-integrations/image-collections) so that you can use independent CI pipelines to build the different container images, even if they are part of the same application Pod.

1. **Applications** > Select Application > **Containers** tab.

1. Click **CREATE**. This will open the Create Container panel.

    ![](/assets/images//docs/containers-1.png)

    !!! note
        **Container Name** - Name of this container. You can name it after the application or default to anything you prefer. If this is a multi-container Application/Pod use a recognizable and clear name (for your own benefit later).

        **Container Type** - In most cases you will be using the default `Primary` type but Init Containers are also supported for advanced configurations. (Init Containers run to completion before the Primary containers are started in a Pod, read more about them [here](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/))

        **Image Collection** - [(Read more about Image Collections)](/05-integrations/image-collections). You can choose an existing or new Image Collection for this container.

    !!! hint "Using Public container images (Docker Hub, GCR, etc.)"


        1. To use a public image, select **+ CREATE NEW** in Image Collections section.

        1. Give it a collection name (if it's from public docker hub, you can name it as `dockerhub` so you can re-use it later if you need other public images from docker hub) and select **_Setup Later_** from the **Select Credentials** drop down.

        1. Copy the public image you want to use in this Container to the **Default Image** field.

        ![](/assets/images//docs/containers-2.png)
    

3. Click **CONTINUE** once you have specified your container details. This will take you to the **Resource Utilization** section.

4. You can adjust any Resource Requests and Limits in this section. **These values can be configured later when you understand how much resources your application really needs**.

    ![](/assets/images//docs/containers-3.png)

5. Click **CONTINUE** to proceed to the **Network** section. You can expose the required ports on the container in this section. (Services and Ingresses will be set up to use these ports).
    !!! hint
        Leave the `Service Port` to the default value unless you want to change the mapping between the container ("Port") and the "Service Port". Eg. 8080 -> 80.

    ![](/assets/images//docs/containers-4.png)

6. Click **CONTINUE** to proceed to the **Advanced Configuration**. In this section you can configure any `commands` or `arguments` to run on your container if required. [(Read more about commands and arguments in Kubernetes containers)](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). 
If there is no such requirement, click **FINISH**.

    ![](/assets/images//docs/containers-5.png)

7. Your container will now be added to the Application Pods. You can edit the container details in the **Containers** tab or switch to the **Overview** tab to see your deployments update with the new details.
