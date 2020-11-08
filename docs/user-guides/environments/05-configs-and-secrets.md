---
id: 05-configs-and-secrets
title: Configurations and Secrets
sidebar_label: Configurations and Secrets
slug: configs-and-secrets
---

## Overview

All configurations and secrets (config files, service accounts keys, database connection strings, API keys, etc.) applied to any Application in an Environment can be managed centrally through the Platformer Console.

[Read more about Kubernetes Configmaps here :material-open-in-new:](https://kubernetes.io/docs/concepts/configuration/configmap/)

[Read more about Kubernetes Secrets here :material-open-in-new:](https://kubernetes.io/docs/concepts/configuration/secret/)


Configurations are of two types and map to the respective Kubernetes resources underneath the hood.

|                    | Kubernetes resource | Viewable | Editable       | Versioned |
| ------------------ | ------------------- | -------- | -------------  | --------- |
| **Configurations** | ConfigMaps          | :material-check: | :material-check: | :material-check: |
| **Secrets**        | Secrets             | :material-close:      | _Update only_  | :material-check: |

!!! important
    All configurations and secrets in the Platformer Console SaaS are **encrypted and stored using a managed Hashicorp Vault**. You can optionally use your own Vault service with a dedicated installation of the Platformer Console.

## Creating a Config

1. **Environments** > Select an Environment
2. **Environment Settings** > **Configs** Tab
3. Click **Create**
4. Fill in the fields

    - Name* - this will be the name of your Configmap. The kubernetes resource will get created with the same name.
    - Configuration Type

        There are 3 Configuration types here.

        - **K-V Map**

            K-V Map stands for a Key Value Map. You can manually add key value pairs or even import a `.env` file.  An example of a .env file is given below.

            ```
            foo=bar
            hello=world
            ```

            ![](/assets/images//docs/kv-map.png)


        - **Config File**

            Config files allow you to browse and mount a file as a configmap in Kubernetes, which can be injected as a file into an application later.

            ![](/assets/images//docs/config-file.png)

        - **Directory**

            Directory allows you to mount folders as configs in Kubernetes. 

            ![](/assets/images//docs/directory.png)

## Versioning

Configurations and Secrets created through the Console will automatically be versioned. You can easily rollback or compare older versions in-browser through the Console. (Comparisons are only available for Configurations and not Secrets).

![](/assets/images//docs/env-config-1.png)


!!! important
    You can rollback only upto 10 revisions.


## Re-using configurations

Platformer allows Configurations to be re-used between multiple Applications in the same Environment if required. 

Any changes made to the configurations will be versioned and synchronized across all clusters and applications in that Environment. 



---

## Choosing between Configurations and Secrets

- Configurations are viewable and editable once created.
- Secrets are "create/replace" only and cannot be viewed or edited once created. However secrets are also versioned and can be rolled back if required.