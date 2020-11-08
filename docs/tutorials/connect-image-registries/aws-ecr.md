---
title: AWS ECR
---

# Connect AWS ECR


## Before you begin

- Have an AWS Account created
- Have AWS CLI installed in your machine or in an EC2 instance
- [Read about connecting Image Registry credentials with Platformer](/user-guides/integrations/01-container-registry-integration/)


## Generating Tokens

1. Setup Environment variables in AWS for the following

    - ACCOUNT - eg: `1111-1111-1111`
    - REGION - eg: `us-east-2`
    - SECRET_NAME - eg:  `${REGION}-ecr-registry`
    - EMAIL - your AWS login email


    ```
    ACCOUNT=1111-1111-1111
    REGION=us-east-2
    SECRET_NAME=${REGION}-ecr-registry
    EMAIL=your-email@aws.com
    ```

2. Create a file called `ecr.sh`

    ```
    TOKEN=`aws ecr --region=$REGION get-authorization-token --output text \
    --query authorizationData[].authorizationToken | base64 -d | cut -d: -f2`

    echo $TOKEN
    ```

3. Run the above script as follows and note down the token printed.

    ``` 
    sh ecr.sh
    ```

## Connecting to Platformer

To integrate a new container registry to the Platformer Console,

1. Navigate to **Credentails** > **Container Registries** and click **+ CREDENTIAL** (or **Get started** if you haven't added one before)

2. Select AWS ECR from **Container Registry Provider** drop down.

3. Fill in the following fields.

    - Region - AWS Region of the previous section
    - Account ID - AWS Account of the previous section
    - Email - AWS Email of the previous section
    - Token - Taken from  the script output in the previous section

4. Click **Save**


## Next Steps