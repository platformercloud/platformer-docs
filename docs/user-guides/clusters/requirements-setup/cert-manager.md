---
id: cert-manager
title: Setting up Cert-Manager
sidebar_label: Setting up Cert-Manager
slug: cert-manager
---

The Platformer Console uses [Jetstack Cert-Manager](https://cert-manager.io/docs/) to create and rotate SSL/TLS certificates for your internet-facing applications and workloads.

## Installation

1. Install cert-manager on your Cluster by following the instructions here: https://cert-manager.io/docs/installation/kubernetes/

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

 