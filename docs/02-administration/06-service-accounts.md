---
id: 06-service-accounts
title: Service Accounts
sidebar_label: Service Accounts
slug: service-accounts
---

The Platformer Console is completely API-driven and as such is extensible for most kinds of custom integration/automation requirements.

Service Accounts can be created as non-human entities in the Console with any combination of permissions and custom roles (similar to a User).

### Creating a Service Account Token

Service accounts can be created at an Organization or Project level, similar to actual Users. The differences in permissions at Organization and Project levels apply to service accounts as well.

1. **Admin panel** > **Organization or Project Settings** > **Service Accounts** > **+ CREATE**
    ![](../../../static/img/docs/service-account-1.png)

1. Add the necessary **permissions** to the service account. 
1. You can optionally set an **Expiry Date** after which the service account token will no longer be valid.
1. Click **SAVE**
1. Copy the generated Token and keep it safe. You will not be able to view this token again without invalidating it.

### Invalidating/Renewing a Service Account Token

1. Find the service account you want to invalidate from the list<br/>
    **Admin panel** > **Organization or Project Settings** > **Service Accounts**

2. Click the 🔃 button next on the service account you want to invalidate. 

:::caution Renewing Tokens
Once a service account token is renewed, the previous token will be discarded and will not be recoverable. 
:::

