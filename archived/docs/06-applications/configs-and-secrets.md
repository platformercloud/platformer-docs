---
id: configs-and-secrets
title: Configurations and Secrets
sidebar_label: Configurations and Secrets
slug: configs-and-secrets
---

> **Read about managing Configurations and Secrets (and the differences) on the Platformer Console [here](/04-environments/configs-and-secrets)**. (Recommended reading)

## Mounting a Configuration or a Secret to an Application.

:::note Configurations/Secrets are managed at an Environment-level
You can create and manage configurations at an Application-level but they will be added to the configurations in the Environment to centrally organize all configurations in *one place.*
:::

1. Navigate to **Applications** > Select an Application > **Configs** tab.

2. Click **+ CREATE**. This will open the 'Config Mount' dialog.

![](/img/docs/config-mount-1.png)

> - **Select Container** - If you have multiple containers in this application, make sure to select the correct container from the drop down menu.

> - **Configuration Type** - Platformer Console allows you to easily mount any of the following file/directory types:
    - **Directory** - Mount an entire directory of files to your container
    - **File** - Mount a single file to your container
    - **Variable** (Environment Variables) - Inject environment variables to your container
    - **Environment File** (.env File) - Upload a .env file containing environment variables that need to be injected into your container

> -  **New or Existing Configuration** - All configurations are managed centrally at an Environment-level. You can either re-use an existing configuration or create a new one.

3. Click **CONTINUE**. If you selected to mount an existing configuration, select the configuration you want to mount or if it's a new configuration, upload or paste the values in the given dialog.

![](/img/docs/config-mount-2.png)

4. Click **CONTINUE** to proceed to the **Mount Configuration**. Specify where you want your configuration to be mounted in the container. 

5. Once done, click **CONTINUE** and then **FINISH** to complete the configuration mount.


---

## Editing or rolling back a Configuration

All configurations and secrets created through the Platformer Console are versioned. While you can only replace a secret, you can read and edit configuration files in-browser.

1. Pick the configuration you want to edit from the **Configs** tab, and select **Edit** from the menu icon.

![](/img/docs/config-mount-3.png)

2. You can update the value in the given editor, or rollback to a previous version.
![](/img/docs/config-mount-4.png)