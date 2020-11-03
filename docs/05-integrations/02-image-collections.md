---
id: 02-image-collections
title: Image Collections
sidebar_label: Image Collections
slug: image-collections
---

## Introduction

Image Collections are a concept within the Platformer Console to manage, list and re-use **all container images** deployed in Environments under a given Project.

![](/assets/images//docs/image-collections-1.png)

!!! note
    It is not required to set up an Image Collection before deploying a new Application. You will be prompted to either create a new Image Collection or re-use an existing one when you set up your Applications.

Deployed images from a particular Container Registry and Image Collection can be found under **Workloads - Image Collections** > (Select Image Collection) > **Images** Tab.

![](/assets/images//docs/image-collections-2.png)

## Webhooks

Image Collections allow you to integrate any existing CI or Build pipeline with the Platformer Console through webhooks.

-   The CI/Build pipeline builds the container image and pushes it to a container registry. [(Read about integrating container registries)](./container-registry-integration)
-   Once pushed to a container registry, a Platformer Webhook will be called by the CI/Build pipeline. This allows the Platformer Console to be notified when a new build is available.

### Webhook Builder

The Console offers a **Webhook Builder** to easily create the webhooks to update an Image Collection from your CI system. The webhook is a simple HTTP POST or GET request to the Platformer APIs that should be called after your container is built and deployed.

!!! note
    The Webhook Builder is also available once your create an Application. (Application > Webhooks Tab)

![](/assets/images//docs/webhook-builder.png)

-   **Channel** - Useful if you have multiple different CI pipelines building images for the same application. (You would create multiple channels in that scenario). Use `default` or the name of the CI pipeline; it's purely for your tracking benefit.

-   **Update Type** (Minor, Major, Patch) - This is to keep track of different update types if your CI pipeline has different release pipelines for Major/Minor/Patch releases. If you don't have such a configuration, just default to `Major` or `Minor` (it's only used for keeping track of image deployments, just as with Channels).

-   **Image Name** - The image name as stored in your Container registry. <br/>eg. `gcr.io/your-gcp-project/your-image` <br/>(if you want a specific tag, include it as well `gcr.io/your-gcp-project/your-image:latest`)

-   **Token** - A Platformer Service Account Token to authorize the webhook call. You can generate a new token from the Webhook Builder by clicking **GENERATE** or re-use an existing token in the same Platformer Project.

Copy the generated webhook command into the last step of your CI/Build pipeline. (i.e. call it once the container is built and stored in a container registry.)

Make sure that the container registry is [Integrated with the Platformer Console](./container-registry-integration) if your Kubernetes Cluster is not with the same Provider as your container registry.
