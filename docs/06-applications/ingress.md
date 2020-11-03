---
id: ingress
title: Ingress and DNS
sidebar_label: Ingress and DNS
slug: ingress
---

## Prerequisites

-   Ensure that you have the [necessary services (Ingress Controller and Cert-Manager) installed in your clusters](/03-clusters/cluster-requirements#3-third-party-services).
-   Create the necessary DNS records (A Records or CNAME records depending on the type of Load Balancer created by the Ingress Controller) to point to the Load Balancer's IP or CNAME.

    > For example, if you want to use the domain `foo.com`, and assign different subdomains such as `app1.foo.com` and `app2.foo.com` to your Applications, create a DNS record `foo.com` that points to your Load Balancer IP/CNAME.

    > If you want to use DNS' with different hosts, such as `foo.com` and `bar.net`, both DNS records must be created to point towards the LoadBalancer.

## Exposing your Application to the Internet

1. Navigate to the **Ingress** tab in Application Overview and click **+ CREATE**. This will open the Ingress setup wizard.

2. Add the **Host Names**. You can assign multiple host names to your application as long as all the DNS records are set up to point to your Ingress Controller's Load balancer.

    ![](/img/docs/ingress-1.png)

3. Click **CONTINUE** to proceed to the **Service Mapping** section. Ports that you have exposed in your container (along with any custom mappings) will be available from the dropdown menu. If you have multiple ports mapping to different _paths_ under the host name, you can configure that here.

    ![](/img/docs/ingress-2.png)

4. Click **CONTINUE** to open the **Advanced Configurations** section. Here you can configure the details for your Ingress Controller. Select `letsecrypt-prod` (might have a different name if you named it differently) from Cluster Issuer dropdown.

    > If you can't see any Cluster Issuers, ensure that you have [set it up correctly](/03-clusters/requirements-setup/cert-manager#installation).

    :::note Backend Protocol
    The Backend-protocol refers to the protocol used by the Ingress Controller to route traffic to the Application's service **internally**. This does **not** have anything to do with external TLS (https) on the public DNS. [Read more](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#backend-protocol)
    :::

    ![](/img/docs/ingress-3.png)

5. The next section will allow you to add any **Custom Annotations to the Ingress resource**. This is an advanced configuration option [(nginx annotations)](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations) and if it's not required, click **FINISH** to create your ingress.

6. The ingress should be created and your application will be now exposed under the hostnames that you provided. 
    > Note that it may take a while for Cert-Manager to create and propage your TLS certificates for HTTPS.

---

## Advanced Ingress Configurations

### Fan-out Ingress

To create fan-out ingress configurations (different 'Applications' mapped to different paths on the same host name) with the Platformer Console,
- simply create new ingresses on the different Applications that need to be part of the fan-out ingress (use the same host name)
- In the **Service Mapping** section of the setup, make sure to change the path (`/`) in each ingress.

    - Application `Front-End` -> Ingress (Hostname: `foo.com`, Path: `/` )
    - Application `Backend-API` -> Ingress (Hostname: `foo.com`, Path: `/api`)
