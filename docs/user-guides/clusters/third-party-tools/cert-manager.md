---
id: cert-manager
title: Setting up Cert-Manager
sidebar_label: Setting up Cert-Manager
slug: cert-manager
---

The Platformer Console uses [Jetstack Cert-Manager](https://cert-manager.io/docs/) to create and rotate SSL/TLS certificates for your internet-facing applications and workloads.

## Before you begin

- Ensure that you have a cluster connected at Platformer Console. [Read more on Cluster Connection here](/user-guides/clusters/03-connecting-clusters/)


### Using Platformer Shell

1. [Access Kubectl Shell from the Console](/user-guides/clusters/04-kubectl-shell/)
2. Run the following commands

    ```
    kubectl create namespace cert-manager
    ```
    ```
    helm install \
    cert-manager jetstack/cert-manager \
    --namespace cert-manager \
    --version v0.16.0 \
    --set installCRDs=true
    ```

1. Create a the following `ClusterIssuer` resource using `kubectl apply -f <filename>`.

    ```yaml
    apiVersion: cert-manager.io/v1alpha3
    kind: ClusterIssuer
    metadata:
      name: letsencrypt-prod
    spec:
      acme:
        # update email
        email: <Your support email>
        privateKeySecretRef:
          name: letsencrypt-prod
        server: https://acme-v02.api.letsencrypt.org/directory
        solvers:
        - http01:
            ingress:
              # update ingress class based on which ingress controller you installed
              class: nginx
    ```

    !!! hint
        With Cert manager you can do wildcard and dns ssl certificates as well. [Please refer Official Documentation](https://cert-manager.io/docs/installation/kubernetes/)

## Manual Installation

Install cert-manager on your Cluster by following the instructions here: [Cert Manager Installation Guide](https://cert-manager.io/docs/installation/kubernetes/)



 