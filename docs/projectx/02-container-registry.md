---
id: 02-container-registry
title: Container Registry
sidebar_label:  Container Registry Integration
---

## Integration Azure Registry to your project

To integrate a new ACR to platformer, go to **Kubernetes -> Credentails -> Container Registry** and click **CREDENTIAL**.

<img src='/img/projectx/acr/create-acr-1.png' width='100%' alt='Create Credentials - step 1' />

Select **ACR** and Fill the  Registry URL, Service Principal ID and Service Principal Password 


:::caution Note!
Your credentials will be securely encrypted and stored within a Hashicorp Vault.
:::

<img src='/img/projectx/acr/create-acr-2.png' width='100%' alt='Create Credentials - step 2' />

Click **Save** 


---

To use this credential, go to **Workloads -> Image Collections** and click **CREATE**.

<img src='/img/projectx/image-collection/create-image-collection-1.png' width='100%' alt='Create Image Collection - step 1' />

Then Select the Visibility to Private and select your Registry Credential from the drop down and Save it.

<img src='/img/projectx/image-collection/create-image-collection-2.png' width='100%' alt='Create Image Collection - step 1' />

---

## Integration Amazon ECR Registry to your project

To integrate a new ACR to platformer, go to **Kubernetes -> Credentails -> Container Registry** and click **CREDENTIAL**.

<img src='/img/projectx/acr/create-acr-1.png' width='100%' alt='Create Credentials - step 1' />

Select **AmazonECR** and Fill the  Region, AccountID, Email Username and Token


:::caution Note!
Your credentials will be securely encrypted and stored within a Hashicorp Vault.
:::

<img src='/img/projectx/ecr/create-ecr-2.png' width='100%' alt='Create Credentials - step 2' />

Click **Save** 


---

To use this credential, go to **Workloads -> Image Collections** and click **CREATE**.

<img src='/img/projectx/image-collection/create-image-collection-1.png' width='100%' alt='Create Image Collection - step 1' />

Then Select the Visibility to Private and select your Registry Credential from the drop down and Save it.

<img src='/img/projectx/image-collection/create-image-collection-2.png' width='100%' alt='Create Image Collection - step 1' />