import { useState, useEffect, useContext } from "react";

import { GroupsContext } from "../../Providers/groups";
import { HeaderDash } from "../../Components/HeaderDash";
import MyGroups from "../../Components/MyGroups";
import GroupList from "../../Components/GroupList";
import AddGroupsModal from "../../Components/AddGroupsModal";

const Groups = () => {
  const { groups, getUserGroups, searchGroups } = useContext(GroupsContext);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits:token")) || ""
  );
  const [rendered, setRendered] = useState(false);
  const [modalCreateGroup, setModalCreateGroup] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setRendered(true);
    getUserGroups(token);
  }, [token]);

  const handleClickCreate = () => {
    setModalCreateGroup(true);
  };

  const handleClickSearch = () => {
    searchGroups(searchInput, token);
  };

  return (
    <>
      <HeaderDash />

      <div>
        <h3>GROUPS</h3>
        <button onClick={() => handleClickCreate()}>Crie um novo grupo</button>
        <div>
          {searchInput === "" ? (
            <button onClick={() => handleClickSearch()}>
              Buscar por todos grupos
            </button>
          ) : (
            <button onClick={() => handleClickSearch()}>
              Buscar grupo específico
            </button>
          )}
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Busca"
          />
        </div>
        <div>
          <h3>Seus grupos:</h3>
          {rendered ? (
            groups.length > 0 ? (
              <GroupList />
            ) : (
              <h2>Adicione grupos!</h2>
            )
          ) : null}
        </div>
        <AddGroupsModal
          modalCreateGroup={modalCreateGroup}
          setModalCreateGroup={setModalCreateGroup}
          token={token}
        />
      </div>
    </>
  );
};

export default Groups;
