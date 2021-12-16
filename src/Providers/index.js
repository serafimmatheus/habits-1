import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./Goals";

const Providers = ({ children }) => {
  return (
    <ActivitiesProvider>
      <HabitsProvider>
        <GroupsProvider>
          <GoalsProvider>{children}</GoalsProvider>
        </GroupsProvider>
      </HabitsProvider>
    </ActivitiesProvider>
  );
};
export default Providers;
