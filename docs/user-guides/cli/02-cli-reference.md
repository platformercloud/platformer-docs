---
title: CLI Reference
---

# Usage

```sh
$ platformer COMMAND

$ platformer (-v|--version|version)
platformer-cli/0.1.2-rc6 win32-x64 node-v14.8.0

$ platformer --help [COMMAND]
USAGE
  $ platformer COMMAND
...
```

# Commands

<!-- commands -->

-   [`platformer apply FILEPATH`](#platformer-apply-filepath)
-   [`platformer cluster:connect [CLUSTER]`](#platformer-clusterconnect-cluster)
-   [`platformer cluster:list`](#platformer-clusterlist)
-   [`platformer context:add NAME`](#platformer-contextadd-name)
-   [`platformer context:list`](#platformer-contextlist)
-   [`platformer context:remove NAME`](#platformer-contextremove-name)
-   [`platformer help [COMMAND]`](#platformer-help-command)
-   [`platformer login`](#platformer-login)
-   [`platformer logout`](#platformer-logout)
-   [`platformer select:context [NAME]`](#platformer-selectcontext-name)
-   [`platformer select:environment [ENVIRONMENT]`](#platformer-selectenvironment-environment)
-   [`platformer select:organization [ORGANIZATION]`](#platformer-selectorganization-organization)
-   [`platformer select:project [PROJECT]`](#platformer-selectproject-project)

## `platformer apply FILEPATH`

Create resources in Platformer Console using a Kubernetes YAMLs

```
USAGE
  $ platformer apply FILEPATH

ARGUMENTS
  FILEPATH  Path to YAML file

OPTIONS
  -A, --all                        Log out of all contexts
  -E, --environment=environment    Environment Name
  -O, --organization=organization  [default: Platformer Beta Testers] Organization Name
  -P, --project=project            [default: beta-test-1] Project Name
  -h, --help                       show CLI help
```

## `platformer cluster:connect [CLUSTER]`

Connect a Kubernetes Cluster (in your kubeconfig) to the Platformer Console

```
USAGE
  $ platformer cluster:connect [CLUSTER]

ARGUMENTS
  CLUSTER  (OPTIONAL) Name of the Kubernetes Cluster to connect to the Platformer Console (must be a cluster name in
           your kubeconfig). If not provided, the CLI will enter an interactive mode to select a Cluster.

OPTIONS
  -O, --organization=organization  [default: Platformer Beta Testers] Organization Name
  -P, --project=project            [default: beta-test-1] Project Name
  -h, --help                       show CLI help

EXAMPLES
  $ platformer connect:cluster
  $ platformer connect:cluster <cluster-name as listed in your kubeconfig>
  $ platformer connect:cluster --organization <organization> --project <project> # override context defaults
```

## `platformer cluster:list`

Lists all connected Kubernetes Clusters in a Project

```
USAGE
  $ platformer cluster:list

OPTIONS
  -O, --organization=organization  [default: Platformer Beta Testers] Organization Name
  -P, --project=project            [default: beta-test-1] Project Name
  -h, --help                       show CLI help
  -x, --extended                   show extra columns
  --columns=columns                only show provided columns (comma-seperated)
  --csv                            output is csv format
  --filter=filter                  filter property by partial string matching, ex: name=default
  --no-header                      hide table header from output
  --no-truncate                    do not truncate output to fit screen
```

## `platformer context:add NAME`

Add a new context

```
USAGE
  $ platformer context:add NAME

ARGUMENTS
  NAME  Context name (must be unique)

OPTIONS
  -h, --help  show CLI help
```

## `platformer context:list`

Lists all configured contexts

```
USAGE
  $ platformer context:list

OPTIONS
  -h, --help         show CLI help
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-seperated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=default
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
```

## `platformer context:remove NAME`

Remove a context

```
USAGE
  $ platformer context:remove NAME

ARGUMENTS
  NAME  Context name to remove

OPTIONS
  -h, --help  show CLI help
```

## `platformer help [COMMAND]`

display help for platformer

```
USAGE
  $ platformer help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## `platformer login`

Log in to the CLI with your Platformer Account (logs into the current context)

```
USAGE
  $ platformer login
```

## `platformer logout`

Log out of the CLI (from the current context)

```
USAGE
  $ platformer logout

OPTIONS
  -A, --all          Log out of all contexts
  -h, --help         show CLI help
  --context=default  [default: default] Name of a specific context to log out from (defaults to current context)
```

## `platformer select:context [NAME]`

Select a context

```
USAGE
  $ platformer select:context [NAME]

ARGUMENTS
  NAME  (OPTIONAL) Context name. If not provided, the CLI will prompt an interactive selection

OPTIONS
  -h, --help  show CLI help
```

## `platformer select:environment [ENVIRONMENT]`

Select a default Environment for your current context.

```
USAGE
  $ platformer select:environment [ENVIRONMENT]

ARGUMENTS
  ENVIRONMENT  (OPTIONAL) Name of the Environment to set in the current context. If not provided, the CLI will open an
               interactive prompt to select an Environment.

OPTIONS
  -O, --organization=organization  [default: Platformer Beta Testers] Organization Name
  -P, --project=project            [default: beta-test-1] Project Name
  -h, --help                       show CLI help

ALIASES
  $ platformer select:environment
  $ platformer select:env

EXAMPLES
  $ platformer select:environment # interactive select
  $ platformer select:env <environment-name>
```

## `platformer select:organization [ORGANIZATION]`

Select a default Organization for your current context.

```
USAGE
  $ platformer select:organization [ORGANIZATION]

ARGUMENTS
  ORGANIZATION  (OPTIONAL) Name of the Organization to set in the current context. If not provided, the CLI will open an
                interactive prompt to select an Organization.

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ platformer select:organization
  $ platformer select:org
  $ platformer select:organisation

EXAMPLES
  $ platformer select:org # interactive select
  $ platformer select:org <organization-name>
```

## `platformer select:project [PROJECT]`

Select a default Project for your current context. Requires an Organization to be set with select:org or using the --o flag

```
USAGE
  $ platformer select:project [PROJECT]

ARGUMENTS
  PROJECT  (OPTIONAL) Name of the Project to set in the current context. If not provided, the CLI will open an
           interactive prompt to select an Project.

OPTIONS
  -O, --organization=organization  [default: Platformer Beta Testers] organization name
  -h, --help                       show CLI help

ALIASES
  $ platformer select:project
  $ platformer select:proj

EXAMPLES
  $ platformer select:project # interactive select
  $ platformer select:project <project-name>
```

<!-- commandsstop -->
