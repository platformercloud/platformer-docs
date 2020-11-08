---
title: Azure ACR
---

# Connect Azure ACR


## Before you begin

- Have a Microsoft Azure Account created
- Azure CLI installed or use the online AZ Cloud Shell
- [Read about connecting Image Registry credentials with Platformer](/user-guides/integrations/01-container-registry-integration/)


## Generating Tokens

1.  Go to the Azure Portal and create a Container Registry.

    [Read more on how to create a container registry using Azure Portal](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal)

    [Read more on how to create a container registry using Azure CLI](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-azure-cli)


2. Create a file called `acr.sh`

    ```
        #generate service pricipal id and password using below command under shell script file  

        ACR_NAME=$1
        SERVICE_PRINCIPAL_NAME=$2
        ROLE=$3

        if [ -z "$ROLE" ]
        then
            ROLE=acrpush
        fi

        # Obtain the full registry ID for subsequent command args
        ACR_REGISTRY_ID=$(az acr show --name $ACR_NAME --query id --output tsv)

        # Create the service principal with rights scoped to the registry.
        # Default permissions are for docker pull access. Modify the '--role'

        SP_PASSWD=$(az ad sp create-for-rbac --name http://$SERVICE_PRINCIPAL_NAME --scopes $ACR_REGISTRY_ID --role $ROLE  --query password --output tsv)
        SP_APP_ID=$(az ad sp show --id http://$SERVICE_PRINCIPAL_NAME --query appId --output tsv)

        # Output the service principal's credentials; use these in your services and
        # applications to authenticate to the container registry.
        echo "Service principal ID: $SP_APP_ID"
        echo "Service principal password: $SP_PASSWD"
    ```

3. Run the `acr.sh` file passing the following variables.

    - `ACR_NAME` - Name of your container registry in Azure. (eg: myapp.azurecr.io)
    - `SERVICE_PRINCIPAL_NAME` - Must be a unique name within your AD tenent. (eg: unique-acr-service-principal)
    - `ROLE` - Default permissions for docker pull, push access
        - `acrpull` - Pull Only
        - `acrpush` - Push and Pull
        - `owner` - Push, Pull and assigned Roles

        By default `acrpush` is used.


    Run the following command. Replace the appropriate values as mentioned above.

    ```
    sh acr.sh <ACR_NAME> <SERVICE_PRINCIPAL_NAME> <ROLE>
    ```
    
## Connecting to Platformer

To integrate a new container registry to the Platformer Console,

1. Navigate to **Credentails** > **Container Registries** and click **+ CREDENTIAL** (or **Get started** if you haven't added one before)

2. Select Azure ACR from **Container Registry Provider** drop down.

3. Fill in the following fields.

    - Registry URL - ACR_NAME of the previous section
    - Service Principal ID - Taken from  the script output in the previous section
    - Service Principal Password - Taken from  the script output in the previous section

4. Click **Save**


## Next Steps
