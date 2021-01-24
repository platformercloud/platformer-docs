---
id: 03-billing-accounts
title: Billing Accounts
sidebar_label: Setting up a Billing Account
slug: billing-accounts
---

## Overview

In order to continue working with an Organization, you need to have *atleast one billing account* associated with it. A Billing account must be asscoiated with a Platformer Project. 
[Read more about billing resource heirachy here.](/user-guides/administration/01-resource-hierachies)

![](/assets/images//docs/billing.svg)

A Billing Account is responsible for Organization Support Plans. [Read more on Platformer Support Plans here](/support).

The Platformer Console supports two types of payments:

### Credit Card payments

Platformer Supports the following Credit Cards
  
- Visa
- Mastercard
- Amex

!!! info
    Platformer maintains PCI Complience with stripe integration. <a href="https://stripe.com/guides/pci-compliance" target="_"> You can learn more about it here :material-open-in-new: </a>

### Monthly Invoices

-  Invoice method allows you to go ahead with Platformer console without providing credit card information. 
-  Platformer will be sending an Invoice monthly for the email provided in the billing account.
-  The billing account will be approved by a verification process from the Platformer accounts team.

!!! info
        A Billing Account will take 1-2 busuiness days to get verified and enabled.

!!! attention
        Invoice option is only available for organizations with a verified domain. [Learn more about verified domains here](http://localhost:8000/user-guides/administration/02-organizations/#domain-verification)

## Before you begin

- Ensure that you have an [Organization](/user-guides/administration/02-organizations) set up (unless you're using your Personal Workspace)
- Read about the [Resource Hierachies in the Platformer Console](/user-guides/administration/01-resource-hierachies)

## Creating a Billing Account

1. Select Organization from the Organization drop down at the top header.

1. Navigate to **Admin Panel** > **Billing**

1. Click **CREATE** in the Billing tab under your Organization.

1. Fill in the following mandatory* values
    - Account Name*
    - Phone Number*

    !!! info "Enterprise Accounts" 
        Select **Invoice** billing if you are an enterprise account. The billing account will be approved by a verification process from the Platformer accounts team.
    
    === "Credit Card"

        - Card Holder Name*
        - Card Number*
        - CVC*
        - Expiry Date*
        - Postal Code*

    === "Invoice"
        
        - Contact Name*
        - Contact Email*
 
    A Screenshot of the billing form is provided below.

    ![](/assets/images//docs/billing-3.png)

4. Click **CONTINUE**

5. Support Plans

    You will be prompted to purchase Platformer Support plans (available in 'Support Blocks') in the next step. 

    [Read more on Platformer Support Plans](/support).

    !!! attention
        You can purchase support plans later at any time.



## Next Steps

- [Create a Project](/user-guides/administration/03-billing-accounts)
- [Add a Support Plan](/support)