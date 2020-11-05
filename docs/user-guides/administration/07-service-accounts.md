---
id: 06-service-accounts
title: Service Accounts
sidebar_label: Service Accounts
slug: service-accounts
---

The Platformer Console is completely API-driven and as such is extensible for most kinds of custom integration/automation requirements.

Service Accounts can be created as non-human entities in the Console with any combination of permissions and custom roles similar to a User.

Service Accounts can be created both at Organization level and Project level. If created under Project level, the service account can control project level resources of that specific project according to given permissions. Organization level Service Accounts can span accross multiple projects with different access level permissions.

Once created a Service Account, you will be give a one time token to store safely. If you lose it, you will have to generate a new token invalidating the old one.

!!! warning
    Only create service accounts when needed and **do not commit the tokens into public repositories**.


### Creating a Service Account Token

Service accounts can be created at an Organization or Project level, similar to actual Users. The differences in permissions at Organization and Project levels apply to service accounts as well.

1. **Admin panel** > **Organization or Project Settings** > **Service Accounts** > **CREATE**

1. Add the necessary **permissions** to the service account. 
1. You can optionally set an **Expiry Date** after which the service account token will no longer be valid.

    !!! hint
        This is a good option if you are going to temperory grant someone access to Platformer APIs or Webhooks to trial or perform one off tasks.

1. Click **SAVE**
1. Copy the generated Token and keep it safe. 

    !!! hint
        You will not be able to view this token again without invalidating it.

### Renewing a Service Account Token

1. Find the service account you want to invalidate from the list

    **Admin panel** > **Organization or Project Settings** > **Service Accounts**

2. Click the :material-autorenew button next on the service account you want to invalidate. 

!!! warning
    Caution Renewing Tokens.
    Once a service account token is renewed, the previous token will be discarded and will not be recoverable. 
 

