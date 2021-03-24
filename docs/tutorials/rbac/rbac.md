# RBAC

Role-based access control (RBAC) restricts access based on a user's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that user have to the organization.

Through RBAC, you can control what end-users can do at both broad and granular levels. You can designate whether the user is an administrator, a specialist user, or an end-user, and align roles and access permissions with your users positions in the organization. Permissions are allocated only with enough access as needed for users to do their jobs.

## Access Levels

- Organization Level: Roles granted at this level are inherited by all resources under the organization. Organization Admins can grant roles to team members so that they can access an organization's resources.
- Project Level: Roles granted at the project level are inherited by resources within that project. 
- Environment Level: roles granted at the environment level are inherited by resources within that environment.


## Sample Senarios

1. Add new user into the organization.
    - Go to `Admin Panel -> Organization -> Users & Roles`
    - Create new user with any Role.

2. Add new user into the Project.
    - Go to `Admin Panel -> Project -> Users & Roles`
    - Add user to the project with any Role.

3. If you want grant access only to the organization just as a member, use `organization member` role.

4. `organization admin`, `organization editor`, `organization viewer` will grant access to all resources in the organization according to the role type.
    - e.g : if user given a `organization viewer` role it will grant access all resources in the organization as a viewer. user can view all details in the billing section, projects, enviornment, etc... as a viewer only.

5. Give access only for specific enviornment.
    - Add user to the organization as `organization member`.
    - Add user to the project as `operator viewer`.
    - Add use to the specific enviornment as `enviornment viewer`.