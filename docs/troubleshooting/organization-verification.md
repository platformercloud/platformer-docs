
# Organization Verification

If you successfully followed [DNS Verification Guide](/user-guides/administration/02-organizations/#domain-verification) and still cannot verify your organization, Please follow the following steps to troubleshoot

!!! hint
    Wait about 3 -5 minutes to propergate DNS

Sometimes, it takes a little bit of time to propergate DNS in DNS servers. Usually the default wait time is 300 seconds which is equivalent for 5 minutes.

## Confirm the TXT record is actually set by using an external tool.

- [TXT Lookup](https://mxtoolbox.com/TXTLookup.aspx) will return you your TXT records currently set in your domain.

- [Google Dig](https://toolbox.googleapps.com/apps/dig/)  will return you your TXT records currently set in your domain.

- `nslookup` on command line can be used to verify DNS by running the following command.

    ```
    nslookup \
    server google-public-dns-a.google.com
    set type=txt \
    <your-domain>
    ```

- [Command line tool DIG](https://www.digitalocean.com/docs/networking/dns/resources/use-dig/) can be used to verify this as well by running the following command

    ```
    dig <your-domain> TXT
    ```

## DNS flush

At certain times, if you try to verify your domain before the DNS was actually propergated, Platformer could be trying to verify the DNS through DNS cache. To fix this, [Flush DNS](https://developers.google.com/speed/public-dns/cache) using the Google DNS flush


## Contact Support

If none of the above methods work, please go ahead and [Contact Support](https://platformer.atlassian.net/servicedesk/customer/portal/1/group/4)