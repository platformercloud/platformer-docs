---
title: Resource Explorer
---

Resource Explorer allows you to directly manage and edit Kubernetes YAMLs that have been applied to the cluster. This is a direct and a safer alternative for [Kubernetes Dashboard](https://github.com/kubernetes/dashboard).

This was developed by the Platformer team to quickly have a look around on what's running on the cluster regardless whether the resources have been applied by Platformer Console or not.
## Before you begin

You need to have a Kubernetes Cluster connected with the Platformer Console. If you don't please refer the [Cluster connection guide here.](../03-connecting-clusters/)


## Managing Resources

You can easily navigate through the below UI and edit, delete and view resources in your Kubernetes Cluster.

![](/assets/images//docs/cluster-resource-1.png) 

- On the left column, you can see the available resources types and API Versions.
- You can easily filter resources through namespace dropdown on the right top control and also use the search bar to search resources.

## Updating Resources

You can easily edit and apply a YAML on the go as shown in the below example.

![](/assets/images//docs/cluster-resource-1.png) 

!!! caution
    If the particular resource is created by Platformer Console itself, it is not recommended to edit the YAML here. Rather, please click the ***Go To Application*** button and edit the YAML there inside the application.




## Known Issues

Platformer Console uses `kubectl api-versions` endpoint to retrieve the available resources in the Cluster to generate the resource bar dynamically. We have identified on certain clusters, (specially AWS managed EKS clusters) doesn't support the above endpoint. 

We will be releasing a patch for this soon in a future release.
## Alternatives

- [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) as explained earlier is the popular alternative out there at the moment.
- [Octant](https://github.com/vmware-tanzu/octant) by VMWare is another great tool if you want more extensibility.

These tools can be easily deployed to your cluster through Platformer Catalogs.