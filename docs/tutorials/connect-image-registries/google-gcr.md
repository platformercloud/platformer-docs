---
title: Google GCR
---

# Connect Google GCR


## Before you begin

- Have a Google Cloud Project Setup
- [Read about connecting Image Registry credentials with Platformer](/user-guides/integrations/01-container-registry-integration/)


## Generating Tokens

1. [Create a Service Account in your Google Project](https://cloud.google.com/iam/docs/creating-managing-service-accounts#iam-service-accounts-create-console)

2. Grant the following IAM roles to the service account
    - Storage Editor
    - Project Viewer

3. [Create and download a Key for the Service Account](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)



## Connecting to Platformer

To integrate a new container registry to the Platformer Console,

1. Navigate to **Credentails** > **Container Registries** and click **+ CREDENTIAL** (or **Get started** if you haven't added one before)

2. Select Google GCR from **Container Registry Provider** drop down.

3. Fill in the following fields.

    - GCR Auth Url - Location where your images are stored. Typically this is by default `gcr.io`
    - Service Account Key - Browse the file you downloaded on the previous section.

4. Click **Save**


## Next Steps