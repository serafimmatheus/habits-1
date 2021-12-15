import { useState, useEffect, useContext } from "react";

import { GroupsContext } from "../../Providers/groups";
import { HeaderDash } from "../../Components/HeaderDash";
import MyGroups from "../../Components/MyGroups";
import GroupList from "../../Components/GroupList";
import AddGroupsModal from "../../Components/AddGroupsModal";
import {
  ContainerButton,
  Button,
  ButtonSearch,
  GroupCardContainer,
} from "../../Styles/global";
import { BiAddToQueue } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
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
  };
  const subRequest = () => {
    getUserGroups();
    setSubRender(!subRender);
  };

  return (
    <>
      <HeaderDash />

      <div>
        <h3>GROUPS</h3>
        <ContainerButton>
          <Button onClick={() => subRequest()}>Grupos incritos</Button>{" "}
          <Button onClick={() => handleClickCreate()}>
            <BiAddToQueue color="white" />
            Crie um novo grupo
          </Button>
          <ButtonSearch>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Buscar Grupos"
            ></input>

            {searchInput === "" ? (
              <Button onClick={() => handleClickSearch()}>
                Buscar todos
                <FiSearch />{" "}
              </Button>
            ) : (
              <Button onClick={() => handleClickSearch()}>
                Buscar específico
              </Button>
            )}
          </ButtonSearch>
        </ContainerButton>
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
        <GroupCardContainer>{subRender && <SubGroups />}</GroupCardContainer>
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
