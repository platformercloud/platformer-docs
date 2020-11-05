---
id: 07-audit-logs
title: Audit Logs
sidebar_label: Audit Logs
slug: audit-logs
---

The Platformer Console records all transactions and activities at all levels in the [Resource Hierachy](/user-guides/administration/01-resource-hierachies)

Platformer has 3 Audit Logs asscoicated with it.

## System Audit Logs

Under system Audit logs, Everything you do is logged in the following format.

- Timestamp
- Level - `Info` `Unauthorized` 
- User - Email of the user who accessed
- Messege - Consists of `<Request Type>-<Request Path>-<Response Status>`
- User ID
- Project ID
- Organization ID
- Metadata - Contains user agent. From where the request was sent.
- Executer - To which Platformer MicroService the request was sent to.

![](/assets/images//docs/audit-logs-1.png)

All these logs are available to viewed both under organization level and project level. Logs can be searched by Date range or log level

### Organization-level Audit Logs

- **Admin Panel** > **Organization - Audit Logs**

### Project-level Audit Logs

- **Admin Panel** > **Project - Audit Logs**


## Vault Access Logs

This is a Project specific audit log. For each Project created in Platformer, A Hashicorp Vault kv engine and a user and an approle is created. This Vault is where we would be storing your sensitive information that you put on Platformer Console.

Everything that happens in that kv engine will be stored and can be viewed from the console. 

!!! important
    Vault Audit Log browser would only work with Platformer Public Vault. If you have connected your own Vault, the logs will not be visible here.

!!! info
    Vault Access log browsing will be available soon on the console.

## Activity Logs

Platformer Keeps track of the changes the system performs under application level as well. These can be viewed under application level.

### Environment-level Activity Logs

- [Read more about Environment Activity logs](/user-guides/environments/06-activity-logs)

### Application-level Activity Logs

- [Read more about Application Activity Logs](/user-guides/applications/activity-logs)
