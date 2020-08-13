---
id: 04-applications
title: Deploying your first Application on PXE
sidebar_label: Applications
---
:::caution Deprecation Notice!
PlatformerXE will be deprecated in favour of Platformer Next Gen once it becomes *Generally Available* (currently in Beta).

If you are an existing PXE customer, the Platformer team will reach out to you and assist in migrating your applications before PXE is deprecated.
:::

First select the Organization and the Project you want your application to be deployed in.

<img src='/img/pxe/deploy-first-app-1.png' width='100%' alt='Deploying your first app - Step 1' />

Then under Cloud in the side menu select Apps. To create a new application, click New (top right corner).

<img src='/img/pxe/deploy-first-app-2.png' width='100%' alt='Deploying your first app - Step 2' />

<img src='/img/pxe/deploy-first-app-3.png' width='60%' alt='Deploying your first app - Step 3' />

Fill in the details and click save. Click on the newly created app on the list and click on the name to go to inside.

The Overview sections shows a summary of the current settings.

<img src='/img/pxe/deploy-first-app-5.png' width='100%' alt='Deploying your first app - Step 5' />

## Connect your Git Repository

The **Repository** section includes the three subsections: Repository, CI/CD Configuration and Docker Registry.

In Repository, you can add your own Github, Bitbucket and Gitlab (Gitlab Cloud or Gitlab Onpremise) repos.

<img src='/img/pxe/deploy-first-app-6.png' width='100%' alt='Deploying your first app - Step 6' />

## Define Build and Release Pipelines

With CI/CD Configuration, you can add your own configurations.

<img src='/img/pxe/deploy-first-app-7.png' width='70%' alt='Deploying your first app - Step 7' />

### Integrate your existing CI from Docker Registry (Optional)

With Docker Registry, you can push your builds to your own docker registry.

<img src='/img/pxe/deploy-first-app-8.png' width='60%' alt='Deploying your first app - Step 8' />

## Set up Monitoring and HealthChecks

### Monitoring

The next section, Monitoring lets you create Health Check Policies ensure you have zero downtime with app deployments , create Utilization Alerts in case if it reaches a certain threshold amount and check CPU and memory usage of your application.

<img src='/img/pxe/deploy-first-app-9.png' width='100%' alt='Deploying your first app - Step 9' />

### Health Checks

Click Add Heath Check to create a Health Check to ensure you have zero downtime with app deployments.

<img src='/img/pxe/deploy-first-app-10.png' width='100%' alt='Deploying your first app - Step 10' />

### Utilization Alerts

Click Add Utilization Check to create a Utilization Check which send alerts if it reaches a certain threshold amount.

<img src='/img/pxe/deploy-first-app-11.png' width='60%' alt='Deploying your first app - Step 11' />

## Set up Runtime environment

Runtime section allows you to add runtime environment variables to your docker container.

<img src='/img/pxe/deploy-first-app-12.png' width='70%' alt='Deploying your first app - Step 12' />

### Set Environment Variables

To create an environment variable, click Add Runtime Variable.

<img src='/img/pxe/deploy-first-app-13.png' width='100%' alt='Deploying your first app - Step 13' />

### Add a Configuration File

Config files lets you mount configuration files to your docker container.

<img src='/img/pxe/deploy-first-app-14.png' width='60%' alt='Deploying your first app - Step 14' />

To create a new configuration file click Add Config File.

<img src='/img/pxe/deploy-first-app-15.png' width='100%' alt='Deploying your first app - Step 15' />

### Builds

You can view your builds in the Builds section. The builds that you initiated in the CI/CD configurations under Repository section appear here.

<img src='/img/pxe/deploy-first-app-16.png' width='100%' alt='Deploying your first app - Step 16' />

Click on Actions to either Deploy the build, View logs or Download logs.

<img src='/img/pxe/deploy-first-app-17.png' width='100%' alt='Deploying your first app - Step 17' />
