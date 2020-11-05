---
title: Roles and Permissions
---

## Overview

Platformer has 3 Permission levels as listed below. These permissions enable users to setup granular RBAC in Platformer Console. The inheritance of the permissions are provided below.

| Level | Name                     | Inheritance                                                                                                       |
|-------|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| 1     | Organization Permissions |  N/A                                                                                                 |
| 2     | Project Permissions      | Organization Permissions + Project Permissions  (Gives precedence to the higher role)                             |
| 3     | Environment Permissions  | Organization Permissions + Project Permissions  or Environment Permission. (Gives precedence to environment role) |

Permissions are generally divided into 4 main primitive categories. Typically a role would take the form of `<resource-name>-<role-category>`.

| Priority | Role    | Description                               |
|---|---------|-------------------------------------------|
| 4 | Admin   | Can `Create`, `Edit`, `Delete` and `View` resources |
| 3 | Creator | Can `Create`, `Delete` and `View`  resources      |
| 2 | Editor  | Can `Edit` and `View` resources               |
| 1 | Viewer  | Can `View` resources                        |



## Organization Level Permissions

- Permissions that are Organization wide in the console.
- All the permissions are inherited at Project level and Environment level. Setting Project Viewer for an Organization Admin will not work as Organization Admin by default has Project Admin rights.

!!! hint
     If the user you are adding only needs access to specific projects and not the Organization wide access, use the role Organization Member role

#### Permissions 

**Name**|**Code**|**Description**
-----|-----|-----
organization admin|`organization.admin`|Grant access to all resources in the organization
organization editor|`organization.editor`|grant edit access to the organization
organization viewer|`organization.viewer`|grant viewer access to the organization
organization member|`organization.member`|grant member access to the organization
organization IAM|`organization.iam`|Access and administer a organization IAM policies
billing admin|`organization.billing.admin`|billling admin in organization
billing account editor|`organization.billling.editor`|allow to edit billling account in organization
billing account viewer|`organization.billling.viewer`|allow to view billling account in organization
project admin|`organization.project.admin`|grant access to all operations in the project
project creator|`organization.project.create`|grant create access to the projects in the organization
project editor|`organization.project.edit`|grant edit access to the projects in the organization
Project IAM|`organization.project.iam`|Access and administer a project IAM

## Project Level Permissions

- Project level permissions span accross all the resources asscoicated with the project.
- Typically, for each resource there is a `Create`, `Edit`, `Delete` and `View` role associated with it.
- Orgnization Permissions and Project levels are merged together and the higher role is given precedence. If the user is an Organization Admin and in Project level, if the user has  Project Viewer role, By default the user will have project admin access because Organization Admin has Project Admin role asscociated with it.



#### Permissions

**NAME**|**ID**|**DESCRIPTION**
-----|-----|-----
**Applications**| | 
Application Admin|rudder.app.admin|Grant full access to applications
Application Creator|rudder.app.creator|Grant create access to applications
Application Editor|rudder.app.editor|Grant edit access to application resources
Application Viewer|rudder.app.viewer|grant view access to application resources
Container Admin|rudder.container.admin|Grant full access to application containers
Container Creator|rudder.container.creator|Grant create access to application containers
Container Editor|rudder.container.editor|Grant edit access to application container resources
Container Viewer|rudder.container.viewer|grant view access to application container resources
Container Mount Admin|rudder.mount.admin|Grant full access to container mounts
Container Mount Creator|rudder.mount.creator|Grant create access to container mounts
Container Mount Editor|rudder.mount.editor|Grant edit access to container mount resources
Container Mount Viewer|rudder.mount.viewer|grant view access to container mount resources
**Cloud Manager**| | 
cloudmanager credentials admin|cloudmanager.credentials.admin|grant access to the all features of  cloudmanager credentials as admin
cloudmanager credentials editor|cloudmanager.credentials.editor|grant access to the all features of  cloudmanager credentials as editor
cloudmanager credentials viewer |cloudmanager.credentials.viewer|grant access to the all features of  cloudmanager credentials as viewer
**Configurations**| | 
Configmap Admin|rudder.config.admin|Grant full access to Configmaps
Configmap Creator|rudder.config.creator|Grant create access to Configmaps
Configmap Editor|rudder.config.editor|Grant edit access to Configmap resources
Configmap Viewer|rudder.config.viewer|grant view access to Configmap resources
Secret Admin|rudder.secret.admin|Grant full access Secrets
Secret Creator|rudder.secret.creator|Grant create access to Secrets
Secret Editor|rudder.secret.editor|Grant edit access to Secret resources
Secret Viewer|rudder.secret.viewer|grant view access to Secret resources
**Application Delivery**| | 
Application Delivery Admin|rudder.delivery.admin|Grant full access to application delivery
Application Delivery Creator|rudder.delivery.creator|Grant create access to application delivery
Application Delivery Editor|rudder.delivery.editor|Grant edit access to application delivery
Application Delivery Viewer|rudder.delivery.viewer|grant view access to application delivery
**Environments**| | 
Environment Admin|rudder.env.admin|Grant full access to Environments
Environment Creator|rudder.env.creator|Grant create access to Environment
Environment Editor|rudder.env.editor|Grant edit access to Environment resources
Environment Cluster Connector|rudder.env.clusterconnector.admin|grant access to connect clusters to an environment
Environment Viewer|rudder.env.viewer|grant view access to Environment resources
**Gateways**| | 
Gateway Admin|rudder.gateway.admin|Grant full access gateways
Gateway Creator|rudder.gateway.creator|Grant create access to gateways
Gateway Editor|rudder.gateway.editor|Grant edit access to gateway resources
Gateway Viewer|rudder.gateway.viewer|grant view access to gateway resources
**Clusters**| | 
cluster admin|mizzen.admin|admin access to clusters and k8s resources
cluster editor|mizzen.editor|edit access to clusters and k8s resources
cluster browser|mizzen.browser|read-only access to clusters and k8s resources (no cluster access ie. serviceaccount)
cluster viewer|mizzen.viewer|read-only access to clusters and k8s resources
**Apps**| | 
application admin|project.app.admin|grant access to all resources in the apps
application editor|organization.app.edit|grant edit access to the aps
application viewer|project.app.view|grant view access to the apps
**Operator**| | 
operator admin|project.operator.admin|grant access to all resources in the project
operator editor|project.operator.edit|grant edit access to all resources in the project
operator viewer|project.operator.view|grant view access to all resources in the project
IAM|project.operator.iam|Access and administer to the project IAM

## Environment Level Permissions

!!! info
    This feature will be available soon.

## Custom Roles

Custom Roles allow users to combine multiple roles together to create a Custom Role. Custom Roles can be defined on Organization level and Project Level.

Custom roles can be created at an Organization or Project level. Multiple permissions can be combined to create a Custom Role. 


1. **Admin Panel** > **Organization or Project Settings** > **Roles** > **Manage Custom Roles** > Click **CREATE**

2. Assign the created custom roles to your users from the **Members** tab under Organization or Project settings.

!!! hint
    **Custom Role** is a great way to manage team level permissions. If you have teams inside your project that needs to be grouped with the same access, you can create a custom role and assign it to their email. Then you can add or revoke access per team inside the custom role itself.
