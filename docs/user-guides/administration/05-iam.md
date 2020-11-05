---
id: 05-iam
title: Users and Permissions
sidebar_label: Users, roles and permissions
slug: iam
---

## Overview

Platformer IAM provides the necessary tooling to manage all authentication, authorization (roles and permissions) within the Platformer Console.

-   All users must be added to an Organization before they can be added to a Project under that Organization.
-   SSO and Identity Federation is supported for SAML/LDAP/OIDC based Identity Providers only in a [Platformer Stack Dedicated Instance.](/deployment/01-dedicated-instance)
-   Custom Roles can be created and assigned to users by combining permissions to suit your requirements.

![](/assets/images//docs/permissions.svg)

## Before you begin

-   Ensure that you have an [Organization](/user-guides/administration/02-organizations) set up (unless you're using your Personal Workspace)
-   Ensure that you have set up a [Billing Account](/user-guides/administration/03-billing-accounts).
-   Ensure that you have set up a [Project](/user-guides/administration/04-projects).

## Adding new Users

### Add a user to an Organization

2. Invite the user using their email **Admin Panel** > **Organization Settings** > **Members** > Click **CREATE**

3. Assign required permissions for the User. You can add multiple permissions for a user.

    !!! hint
        If the user you are adding only needs access to specific projects and not the Organization wide access, use the role Organization Member. [Read more about permissions](/user-guides/administration/06-roles-and-permissions)

4. Click **SAVE**. This will dispatch an email with a sign-in link to the user.

5. New users will have to signup to the console with the *email* that was provided. They can simply signup by clicking **SIGN UP** button in the login screen on <a href="https://beta.console.platformer.com/" target="_"> Platformer Console :material-open-in-new:</a>.

6. Existing Platfomer Console users will recieve an email and can switch to the new organization using the Organization Switcher on the navigation bar.

    !!! hint
        If the new organization is not visible for a new user in Organization Switcher, Please refresh the page.



### Resend confirmation email

- For the users who have not signed up into the organization will have a tag called *Pending Confirmation* infront of their emails in the user list. 

- If the user hasn't recieved the email, please ask them to check the spam folder.

### Add a user to a Project

Before you begin, The user must first be added to the parent Organization of the Project.

1. **Admin Panel** > **Project Settings** > **Members** > Click **CREATE** and select a User from the list.

2. Assign Project-level permissions to the User.

    !!! hint
        Operator Admin stands for Project Admin. [Read more about permissions](/user-guides/administration/06-roles-and-permissions)



#### Organization vs Project level permissions

- Organization and Project level permissions are different. 

-  Project-level permissions are much more granular and provide fine-grained access control to Project-level resources such as Environments, Clusters and Applications.

- Organization level permissions are inherited at Project-level permissions. i.e. An `Organization Admin` will have `Operator Admin (Project admin)` permissions by default. [Read more about permissions here.](/user-guides/administration/06-roles-and-permissions)

### Add a user to an Environment

!!! info
    This feature will be available soon.