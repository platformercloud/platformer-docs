---
id: advanced-yaml
title: Advanced (working with YAMLs)
sidebar_label: Advanced (working with YAMLs)
---

Kubernetes resources created by the Platformer Console for an Application can be viewed and edited in YAML format if advanced configurations are required.

- To view the YAMLs, navigate to the **Advanced** tab in the Application Overview.

- Any changes you make the the YAMLs will be versioned and therefore can be rolled back if required.
 
   ![](/img/docs/advanced-1.png)


:::note Note 
**If any changes made to the YAMLs conflict with the settings applied through the Platformer Console, they will be overriden**. 

Always change conflicting settings/configurations from the Platformer Console and use the editor for features/settings that are not available from within the Console. 
:::