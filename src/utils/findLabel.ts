import { Permission, Permissions } from "../types/Permissions";

const PermissionReducer = (parent, level) => (pre: object, permission: Permission) => {
  const { children, code, label } = permission;

  const morePermissionItems = children.length > 0
    ? flatPermissionList(children, code, level + 1)
    : {};

  return { ...pre, [code]: { code, label, parent, level}, ...morePermissionItems};
};

export function flatPermissionList(permissions: Permissions, parent: string = "", level = 0): object {
  const FlattenPermission = permissions.reduce(PermissionReducer(parent, level), {});
  return FlattenPermission;
}

export function findLabel(code: string, permissions: Permissions): string {

  // 將權限表攤平
  const flatList = flatPermissionList(permissions);

  const result: any = flatList[code];

  return result !== null
    ? result.label
    : "";
}
