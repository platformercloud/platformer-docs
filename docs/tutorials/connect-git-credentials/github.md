---
title: GitHub  Registry
---

# Connect Git Credentials

## Before you begin

- Have a GitHub Account Created

## Generating Tokens

[Create a GitHub Personal Access Token from here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

- Select the `full:repo` control of private repositories to get repo status
- Select the `workflow` scope to update github action workflows
- Select the `read:user` scope to read all user data 
- Select the `read:packages` scope to download container images and read their metadata.
- Select the `write:packages` scope to download and upload container images and read and write their metadata.
- Select the `delete:packages` scope to delete container images.
 
## Connecting to Platformer

To integrate a new GitHub Credential to the Platformer Console,

1. Navigate to **Credentials** > **Git Repositories** and click  **+ CREDENTIAL** (or **Get started** if you haven't added one before)

2. Select GitHub from Git Service Provider

3. Fill in the following fields. 

    - Credential Name - Put a name for credential (_What is the token for?_)
    - Token - Put the newly created GitHub token
4. Click **Save**


## Next Steps
