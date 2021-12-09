import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";

const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </HabitsProvider>
  );
};

export default Providers;
