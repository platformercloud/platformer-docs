module.exports = {
    docs: {
        Introduction: ['01-introduction/01-introduction-platformer-console'],
        'Administration and Access Management': [
            '02-administration/01-resource-hierachies',
            '02-administration/02-organizations',
            '02-administration/03-billing-accounts',
            '02-administration/04-projects',
            '02-administration/05-iam',
            '02-administration/06-service-accounts',
            '02-administration/07-audit-logs',
        ],
        'Connecting Kubernetes Clusters': [
            '03-clusters/01-cluster-introduction',
            '03-clusters/02-cluster-requirements',
            '03-clusters/03-connecting-clusters',
            '03-clusters/04-troubleshooting',
            {
                'Setting up Cluster services': [
                    '03-clusters/requirements-setup/ingress-controller',
                    '03-clusters/requirements-setup/cert-manager',
                ],
            },
        ],
        'Managing Environments': [
            '04-environments/01-env-introduction',
            '04-environments/02-creating-environments',
            '04-environments/03-multi-cluster-environments',
            '04-environments/04-environment-namespaces',
            '04-environments/05-configs-and-secrets',
            '04-environments/06-activity-logs',
        ],
        Integrations: [
            '05-integrations/01-container-registry-integration',
            '05-integrations/02-image-collections',
        ],
        'Deploying and managing Applications and Workloads': [
            '06-applications/applications-overview',
            {
                'Creating Applications': [
                    '06-applications/creating-applications/deployments',
                ],
            },
            '06-applications/containers',
            '06-applications/webhooks',
            '06-applications/configs-and-secrets',
            '06-applications/scaling',
            '06-applications/healthchecks',
            '06-applications/ingress',
            '06-applications/advanced-yaml',
            '06-applications/promoting-applications',
            '06-applications/volumes',
            '06-applications/pod-events-logs-metrics',
            '06-applications/pod-ssh',
        ],
    },
};
