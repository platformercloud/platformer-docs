---
title: Accessing Kubectl Shell
---

Platformer Console has a Kubernetes Shell enabled, which let's you run commands on your cluster even if your cluster is inside a private network. This is ensured by the functionality behind the Platformer Agent that will be running inside your cluster when you [Connect a Kubernernetes Cluster to the Console.](/user-guides/clusters/03-connecting-clusters/)

In Platformer, All the users are synced with a Service Account that is created for each user in the cluster. The permissions for the service account are determined by the access set in the Platformer Console. When a user requests a Shell session in the cluster, Platformer Agent will automatically create a session shell container for the user binding the service account of that user.

![](/assets/images//docs/shell-flow.svg)

!!! hint
    If the user has Cluster Admin rights defined in Platformer console, the user has full access to the cluster resources inside the kubectl shell.

Platformer Shell has the following tools bundled within it.

- Kubectl
- Helm 3
- Kubens
- Jq
- Curl

!!! hint
    Because Platformer Kubernetes Shell always runs inside the server, you can use Platformer Kubernetes shell to debug in-cluster network issues and dns issues.

## Before you begin

- Ensure that you have a cluster connected at Platformer Console. [Read more on Cluster Connection here](/user-guides/clusters/03-connecting-clusters/)

## Kubectl Shell

1. Go to Clusters at <a href="https://beta.console.platformer.com/clusters" target="_"> Platformer Console :material-open-in-new:</a>
2. Make sure your cluster is Active and navigate into the cluster. 
  
    If the cluster is not at Active state, Please refer [Kubernetes agent troubleshooting](user-guides/clusters/04-troubleshooting/)

3. Press **Open Kubectl Shell** to open the shell.

    !!! hint
        Shell may take upto 1-2 minutes to provision on the first go.

4. Once connected, You should be able to run your desired commands on the shell.
   
    ![](/assets/images//docs/shell-view.png)


## Troubleshooting

!!! note
    This section will be updated soon