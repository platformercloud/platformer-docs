---
id: 05-iam
title: IAM - Managing users, roles and permissions
sidebar_label: Users, roles and permissions
slug: iam
---

## Overview

Platformer IAM provides the necessary tooling to manage all authentication, authorization (roles and permissions) within the Platformer Console.

-   All users must be added to an Organization before they can be added to a Project under that Organization.
-   SSO and Identity Federation is supported for SAML/LDAP/OIDC based Identity Providers - Contact the Platformer Team for more details.
-   Custom Roles can be created and assigned to users by combining permissions to suit your requirements.

## Adding new Users

### To add a user to an Organization

2. Invite the user using their email **Admin Panel** > **Organization Settings** > **Members** > Click **+ CREATE**

3. Assign required permissions for the User. You can add multiple permissions for a user.

4. Click **SAVE**. This will dispatch an email with a sign-in link to the user.

### To add a user to a Project

!!! info ""
    The user must first be added to the parent Organization of the Project.

1. **Admin Panel** > **Project Settings** > **Members** > Click **+ CREATE** and select a User from the list.

2. Assigned Project-level permissions to the User.

!!! info "Organization and Project level permissions" 
    Organization and Project level permissions are different. 

    Project-level permissions are much more granular and provide fine-grained access control to Project-level resources such as Environments, Clusters and Applications.

    Project-level permissions will always override Organization-level permissions. i.e. An `Organization Admin` will not necessarily have `Operator Admin (Project admin)` permissions by default. 
 

---

## Custom Roles

Custom roles can be created at an Organization or Project level. Multiple permissions can be combined to create a Custom Role.

1. **Admin Panel** > **Organization or Project Settings** > **Roles** > **Manage Custom Roles** > Click **+ CREATE**

2. Assign the created custom roles to your users from the **Members** tab under Organization or Project settings.