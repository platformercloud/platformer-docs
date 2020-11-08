---
title: Harbor Registry
---

# Connect Harbor Registry


## Before you begin

- Have a Harbor installation in your environment. [Read more about harbor here](https://goharbor.io/docs/2.1.0/install-config/)
- [Read about connecting Image Registry credentials with Platformer](/user-guides/integrations/01-container-registry-integration/)


## Generating Tokens

 [Create a harbor Robot Account by following the instructions here](https://goharbor.io/docs/1.10/working-with-projects/project-configuration/create-robot-accounts/)

By default, robot accounts expire after 30 days. You can set a longer or shorter lifespan for robot accounts by modifying the expiry period for robot account tokens. The expiry period applies to all robot accounts in all projects.

1. Log in to the Harbor interface with an account that has Harbor system administrator privileges.

2. Go to Configuration and select System Settings.

3. In the Robot Token Expiration (Days) row, modify the number of days after which robot account tokens expire.


!!! hint
    If you want non expired account, maybe simply create a user and use that user's username and password for token.

## Connecting to Platformer

To integrate a new container registry to the Platformer Console,

1. Navigate to **Credentails** > **Container Registries** and click **+ CREDENTIAL** (or **Get started** if you haven't added one before)

2. Select Harbor from **Container Registry Provider** drop down.

3. Fill in the following fields.

    - Registry URL - Harbor server URL
    - Username - Robot username (robot$demo) generated from previous section
    - Token - Robot Token generated from previous section

4. Click **Save**


## Next Steps