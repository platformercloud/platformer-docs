---
id: 03-connecting-clusters
title: Connecting a Kubernetes Cluster
sidebar_label: Connecting a Kubernetes Cluster
slug: connecting-clusters
---

Platformer Console can connect with any cluster that has egress (Outbound) access to port 443 on Platformer Servers. You can read more about this under Network section in [Cluster Requirements](/user-guides/clusters/02-cluster-requirements/#2-network-requirements).

Platformer Agent opens a secure tunnel with the Platformer Servers, Allowing Platformer Console to push configurations to your Kubernetes clusters.

[Read more on how Platformer Agent runs on your Cluster](/user-guides/clusters/01-cluster-introduction/#in-cluster-agent)
 

## Prerequisites

-   A Kubernetes cluster that meets the [**minimum requirements**](./cluster-requirements).
-   Administrative **`Kubectl`** access to the Cluster.
-   Administrative privileges on the Platformer Console.
    -   Organization Admin _or_
    -   Operational Admin (Project-level) _or_
    -   Cluster Admin

## Connecting the Cluster

=== "Console"

    1. To create or add a new cluster select the *Cluster* menu option from the left side panel and then click on the **Create** button as shown in the screenshot below.

        ![](/assets/images/docs/cluster-add-1.png)
    
    2. Select **Connect Existing Kubernetes Cluster**
    
        !!! info 
            Note that creating a Kubernetes Cluster through the Platformer Console is currently unavailable.

        ![](/assets/images/docs/cluster-add-2.png)

    3. Enter the Cluster name (does not have to be the 'actual' name of the Cluster - this name is only used within the Console)

    4. Once the form is completed, you will be provided with ```kubectl apply``link to copy and paste in your  terminal.

        ![](/assets/images/docs/cluster-add-3.png)

    5. Open your terminal, ensure that kubectl is set to the right context and run the copied command. This will install the Platformer Agent in your cluster.

        !!! important 
            Note that the installation may take anywhere from 30 seconds to 5 minutes depending on your network conditions

    6. Refresh the cluster list (please allow up to 5 minutes for the  agent to initialize).
       Once the connection to the Cluster is established, the status of your cluster will be shown as **Active**

    ![](/assets/images/docs/cluster-add-4.png)

=== "CLI"

    !!! note ""
        Platformer CLI will be available soon

### Troubleshooting

Please refer to the [**Troubleshooting Guide**](./troubleshooting).

</Tabs>