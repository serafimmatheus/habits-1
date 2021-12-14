import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";

export const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </HabitsProvider>
  );
};
