import { useState, useEffect, useContext } from "react";

import { GroupsContext } from "../../Providers/groups";
import { HeaderDash } from "../../Components/HeaderDash";
import GroupList from "../../Components/GroupList";
import AddGroupsModal from "../../Components/AddGroupsModal";
import { ContainerButton, Button, InfoGroupCont } from "../../Styles/global";
import { BiAddToQueue } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import SubGroups from "../../Components/SubGroups";
const Groups = () => {
  const { groups, getUserGroups, searchGroups } = useContext(GroupsContext);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits:token")) || ""
  );
  const [rendered, setRendered] = useState(false);
  const [modalCreateGroup, setModalCreateGroup] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [subRender, setSubRender] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, [token]);

  const handleClickCreate = () => {
    setModalCreateGroup(true);
  };

  const handleClickSearch = () => {
    searchGroups(searchInput, token);
    setRendered(true);
    setSubRender(false);
  };
  const subRequest = () => {
    getUserGroups();
    setSubRender(true);
    setRendered(false);
  };

  return (
    <>
      <HeaderDash />

      <div>
        <ContainerButton>
          <Button onClick={() => subRequest()}>
            <MdOutlineSubscriptions size={30} />
            Grupos incritos
          </Button>{" "}
          <Button onClick={() => handleClickCreate()}>
            <BiAddToQueue size={30} />
            Criar Grupos
          </Button>
          {searchInput === "" ? (
            <Button onClick={() => handleClickSearch()}>
              <FiSearch size={30} /> Buscar todos
            </Button>
          ) : (
            <Button onClick={() => handleClickSearch()}>
              <FiSearch size={30} />
              Buscar específico
            </Button>
          )}
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Digite para buscar um grupo "
          ></input>
        </ContainerButton>
        <InfoGroupCont>
          {rendered ? groups.length > 0 ? <GroupList /> : false : null}
        </InfoGroupCont>
        {subRender && <SubGroups />}
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
