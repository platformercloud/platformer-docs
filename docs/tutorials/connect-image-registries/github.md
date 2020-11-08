---
title: Github  Registry
---

# Connect Github  Registry


## Before you begin

- Have a Github Account Created
- [Read about connecting Image Registry credentials with Platformer](/user-guides/integrations/01-container-registry-integration/)


## Generating Tokens

[Create a Gitub Personal Access Token from here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

- Select the `read:packages` scope to download container images and read their metadata.
- Select the `write:packages` scope to download and upload container images and read and write their metadata.
- Select the `delete:packages` scope to delete container images.
 
    
## Connecting to Platformer

To integrate a new container registry to the Platformer Console,

1. Navigate to **Credentails** > **Container Registries** and click **+ CREDENTIAL** (or **Get started** if you haven't added one before)

2. Select Github from **Container Registry Provider** drop down.

3. Fill in the following fields.

    - Registry URL - Put `docker.pkg.github.com` as default.
    - Email - Github login email
    - Username - Github username
    - Password - Github token generated from previous section

4. Click **Save**


## Next Steps
