<<<<<<< HEAD
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";

const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </HabitsProvider>
  );
=======
import { GoalsProvider } from "./Goals";

const Providers = ({ children }) => {
  return <GoalsProvider>{children}</GoalsProvider>;
>>>>>>> featGoals
};

export default Providers;
