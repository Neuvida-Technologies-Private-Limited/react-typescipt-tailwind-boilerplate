export enum LoginConst {
  Login = "Login",
  EnterDetails = "Enter your details",
  Email = "Email",
  Password = "Password",
  ForgotPassword = "Forgot Password",
  NewPassword = "New Password",
  Role = "Select Your Role",
}
export enum USERS {
  User = "USER911",
  FireFighter = "FIREFIGHTER",
  DispatchCenter = "DISPATCH_CENTER"
}
export enum TOKENS {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
  USER_TYPE_TOKEN = "user_type_token",
}
export enum Logout {
  Logout = "Logout",
}
export enum FooterConst {
  Love = "Made with ❤️",
}
export enum UserReport {
  CreateTicket = "Create a ticket~ ",
  NoSelected = "No selected file",
  Incident = "Report an Incident : ",
  UploadImage = "Upload Image",
  Location = "Location",
  TicketCreated = "Ticket Created Successfully"
}
export enum UserHistory {
  History = "History~",
  Refresh = "Refresh"
}
export enum UserProfile {
  Profile = "Profile~",
  FirstName = "First Name :",
  LastName = "Last Name :",
  Email = "Email :",
  UserType = "User Type :",
}
export enum FireFighterDashboard {
  Dashboard = "Dashboard~",
  Assign = "Assign Dispatch Center",
  Refresh = "Refresh"
}
export enum DispatchDashboard {
  Dashboard = "Dashboard~",
  Profile = "Profile ~",
  Select = "Select the Status",
  Refresh = "Refresh"
}
export enum TableConst {
  Incident = "Incident",
  UploadedImage = "Uploaded Image",
  Options = "Options",
  Choose = "Choose Dispatch Center",
  Location = "Location",
  Status = "Status",
  Activity = "Activity",
  FireBeginning = "Fire in Beginning",
  FireSmoke = "Fire with smoke",
  Extremefire = "Extreme fire",
  Created = "CREATED",
  Assigned = "ASSIGNED",
  False = "FALSE_ALARM",
  Resolved = "RESOLVED",
}
export const UserItems = [
  { key: "/user", label: "Create a ticket" },
  { key: "/user/history", label: "History" },
  { key: "/user/profile", label: "Profile" },
];
export const FireFighterItems = [
  { key: "/firefighter", label: "Dashboard" },
  { key: "/firefighter/profile", label: "Profile" },
];
export const DispatchCenterItems = [
  { key: "/dispatch_center", label: "Dashboard" },
  { key: "/dispatch_center/profile", label: "Profile" },
];

export const options =  [
  {
    value: 'RESOLVED',
    label: 'RESOLVED',
  },
  {
    value: 'FALSE_ALARM',
    label: 'FALSE_ALARM',
  },
];
export const UserOptions = [
  { value: "Fire in Beginning", label: "Fire in Beginning" },
  { value: "Fire with smoke", label: "Fire with smoke" },
  { value: "Extreme fire", label: "Extreme fire" },
]