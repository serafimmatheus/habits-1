import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { ActivitiesProvider } from "./activities";

const Providers = ({ children }) => {
  return (
    <ActivitiesProvider>
      <HabitsProvider>
        <GroupsProvider>{children}</GroupsProvider>
      </HabitsProvider>
    </ActivitiesProvider>
  );
};

export default Providers;
