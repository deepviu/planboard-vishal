import React from "react";

export const permissions = [
  {
    roleId: 1,
    permission: ["dashboard", "zone"],
  },
  {
    roleId: 2,
    permission: [
      "dashboard",
      "national",
      "zone",
      "depot",
      "territory",
      "dealer",
      "dashscheduleboard",
    ],
  },
];

const zonepermision = [
  {
    roleId: 1,
    permissions: [1, 2, 3, 4],
  },
  {
    roleId: 2,
    permissions: [1, 2,4],
  },
];
export function hasPermission(roleId, permissionToCheck) {
  const role = permissions.find((role) => {
    return role.roleId === roleId;
  });
  if (role) {
    return role.permission.includes(permissionToCheck);
  }
  return false;
}

export function rolePermission() {
  const roleId = parseInt(localStorage.getItem("roleId"));

  const role = zonepermision.find((role) => {
    return role.roleId === roleId;
  });
  return role;
}

export const zoneData = [
  {
    id: 1,
    name: "North",
  },
  {
    id: 2,
    name: "South",
  },
  {
    id: 3,
    name: "East",
  },
  {
    id: 4,
    name: "West",
  },
];

export const depoData = [
  {
    id: 1,
    name: "Ambala",
  },
  {
    id: 2,
    name: "Delhi-Naraina",
  },
  {
    id: 3,
    name: "Jalandhar",
  },
  {
    id: 4,
    name: "..",
  },
];

export const territoryData = [
  {
    id: 1,
    name: "H04",
  },
  {
    id: 2,
    name: "H05",
  },
  {
    id: 3,
    name: "H06",
  },
  {
    id: 4,
    name: "..",
  },
];

export const dealerData = [
  {
    id: 1,
    name: "Shanti Paints  - Rohtak",
  },
  {
    id: 2,
    name: "Kamal  Enterprise - Rohtak ",
  },
  {
    id: 3,
    name: "Shanti Paints - Jhajjar ",
  },
  {
    id: 4,
    name: "..",
  },
];

export const plansData = [
  {
    id: 1,
    name: "OS / OD / Collection Plan",
  },
  {
    id: 2,
    name: "Activity Plan ",
  },
  {
    id: 3,
    name: "Other ",
  },
  
];
