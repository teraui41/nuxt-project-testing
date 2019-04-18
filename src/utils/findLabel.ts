import { Permission, Permissions } from "../types/Permissions";

const PermissionReducer = (searchedCode: string) => (pre: string, currPermission: Permission) => {
  const { children, code, label } = currPermission;

  if(code === searchedCode) return label

  const nextPermissions = children.length > 0
    ? findLabel(searchedCode, children)
    : "";

  return pre + nextPermissions;
};

export function findLabel(code: string, permissions: Permissions): string {
  return permissions.reduce(PermissionReducer(code), "");
}
