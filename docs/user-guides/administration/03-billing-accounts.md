---
id: 03-billing-accounts
title: Setting up a Billing Account
sidebar_label: Setting up a Billing Account
slug: billing-accounts
---

## Billing Overview

In order to continue working with an Organization, you need to have *atleast one billing account* associated with it. A Billing account must be asscoiated with a Platformer Project. 
[Read more about billing resource heirachy here.](../../welcome/01-resource-hierachies)


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

!!! hint
        Invoice option is only available for organizations with a verified domain.

## Before you begin

Before you begin, you need to have an organization created on Platformer Console.
[Read more about creating and organization here](./02-organizations).

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

    [Read more on Platformer Support Plans here](../../welcome/support).

    !!! hint
        You can purchase support plans later at any time.



