import { createContext, useState } from "react";
import api from "../../Services";
export const ActivitiesContext = createContext([]);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits:token")) || ""
  );

  const getActivities = (group_id) => {
    api
      .get(
        `/activities/?group=${group_id}`,
        { null: null },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setActivities(response.data.results);
      });
  };

  const addActivity = (data, reset, closeModal) => {
    console.log(data);
    api
      .post(`/activities/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getActivities(2);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const editActivity = (id, data, reset, closeModal) => {
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getActivities(2);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const removeActivity = (id) => {
    api
      .delete(
        `/activities/${id}/`,
        { null: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        getActivities(2);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        getActivities,
        addActivity,
        editActivity,
        removeActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
