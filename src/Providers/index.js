import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { GoalsProvider } from "./Goals";

const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <GroupsProvider>
        <GoalsProvider>{children}</GoalsProvider>
      </GroupsProvider>
    </HabitsProvider>
  );
};
export default Providers;
