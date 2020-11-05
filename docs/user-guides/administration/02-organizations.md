---
id: 02-organizations
title: Organization
sidebar_label: Setting up an Organization
slug: organizations
---


When you sign-up for the very first time, the Platformer Console *automatically* creates a **Personal Workspace** for you.

!!! important 
    Your **Personal Workspace** is ideal for your own projects that are NOT shared across a team or an organization. If you wish to continue with the Personal Workspace you can skip this section and [start configuring a Project](/user-guides/administration/04-projects) in your personal workspace.

## Before you begin

Before you begin, it's important to understand the resource hierarchies and relationships with key resources involved in deploying applications on Kubernets using the Platformer Console.
[Read about these concepts here.](/user-guides/administration/01-resource-hierachies)


## Creating your Organization

=== "Console"

  1. Open <a href="https://beta.console.platformer.com/" target="_"> Platformer Console :material-open-in-new:</a>

  2. From the Admin Panel select **CREATE ORGANIZATION**

  3. Fill in the following mandatory* values
    - Organization Name*
    - Organization Address
    - Country*
    - Organization Domain Name* (note you will need to verify this domain in a later step)

        === "Custom Domain"

            !!! note ""
                You can optionally use a **custom domain**. This is to verify the authenticity of the organization you create. 
            
            !!! hint
                When enabling billing accounts later, Only verified custom domains are eligible for invoice method payments in Platformer without adding credit card detais.
                

        === "No Domain"
        
            !!! note ""
                If you do not own a domain, a Platformer domain will be assigned to you. You can skip the verification process explained at section 5.

            !!! hint
                Only Credit Card based billing accounts are accepted for Organizations with a Platformer Domain.  

    - Support Email* (an email where Platformer staff can contact you if required)
     
        !!! hint ""
            If you have used a custom domain, the email domain also should match the custom domain.

  4. Click Continue

  5. At this stage you need to verify that you own the domain name.
    - Copy the TXT record data and verify that you or your Organization owns the domain
    - If you decide to verify it later, please copy the TXT record.

    !!! info "Verify your Domain"
        Please note that **unless you have verified the domain name, you will not be able to create projects under this Organization**. This is a security measure to ensure that no 3rd-party or unauthorized user can create an Organization under your domain.

        [Read more on domain verification here](#domain-verification).
  6. Click Finish - Your organization will be created and set up on the Platformer Console.*




## Domain Verification

If you are an Enterprise Account, and you have created an Organization with a Custom Domain, you have to go through the domain verification process before the organization gets activated in Platformer Console.

1. To verify the custom domain, you will see a screen as shown below
  ![](/assets/images//docs/custom-domain.png)

2. Copy the text and add it as a TXT record for your domain using your domain account portal.

    !!! info "TXT Records"
        This outside the scope of Platformer and is typically handled by a DNS provider such as GoDaddy, CloudFlare, Route53 etc. <a href="https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/" target="_"> Read more on TXT records here. :material-open-in-new:</a>

3. Once you have added the TXT record, Please press the verify button for Platformer to verify your domain.
  
    !!! important 
        It takes about 2-5 minutes for the DNS record to propergate.

## Next Steps

- [Create a Billing Account](/user-guides/administration/03-billing-accounts)
- [Add Users to Organization](/user-guides/administration/05-iam)