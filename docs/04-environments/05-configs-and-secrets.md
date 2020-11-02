---
id: 05-configs-and-secrets
title: Configurations and Secrets
sidebar_label: Configurations and Secrets
slug: configs-and-secrets
---

## Overview

All configurations and secrets (config files, service accounts keys, database connection strings, API keys, etc.) applied to any Application in an Environment can be managed centrally through the Platformer Console.

Configurations are of two types and map to the respective Kubernetes resources underneath the hood.

|                    | Kubernetes resource | Viewable | Editable       | Versioned |
| ------------------ | ------------------- | -------- | -------------  | --------- |
| **Configurations** | ConfigMaps          | ✔        | ✔             | ✔        |
| **Secrets**        | Secrets             | ❌       | _Update only_  | ✔        |

> All configurations and secrets in the Platformer Console SaaS are **encrypted and stored using a managed Hashicorp Vault**. You can optionally use your own Vault service with a dedicated installation of the Platformer Console.

### Re-using configurations

Platformer allows Configurations to be re-used between multiple Applications in the same Environment (if required). 

Any changes made to the configurations will be versioned and synchronized across all clusters and applications in that Environment. 

### Versioning

Configurations and Secrets created through the Console will automatically be versioned. You can easily rollback or compare older versions in-browser through the Console. (Comparisons are only available for Configurations and not Secrets).

![](/img/docs/env-config-1.png)

---

### Choosing between Configurations and Secrets

- Configurations are viewable and editable once created.
- Secrets are "create/replace" only and cannot be viewed or edited once created. However secrets are also versioned and can be rolled back if required.