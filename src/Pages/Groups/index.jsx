import { useState, useEffect, useContext } from "react";

import { GroupsContext } from "../../Providers/groups";
import Header from "../../Components/Header";
import GroupList from "../../Components/GroupList";
import AddGroupsModal from "../../Components/AddGroupsModal";
import {
  ContainerButton,
  Button,
  ButtonSearch,
  InfoGroupCont,
} from "../../Styles/global";
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
  };
  const subRequest = () => {
    getUserGroups();
    setSubRender(!subRender);
  };

  return (
    <>
      <Header />

      <div>
        <h3>GROUPS</h3>
        <ContainerButton>
          <Button onClick={() => subRequest()}>
            <MdOutlineSubscriptions size={30} />
            Grupos incritos
          </Button>{" "}
          <Button onClick={() => handleClickCreate()}>
            <BiAddToQueue size={30} />
            Criar Grupos
          </Button>
        </ContainerButton>
        <ButtonSearch>
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
            placeholder="Digite para buscar"
          ></input>
        </ButtonSearch>
        <InfoGroupCont>
          <h3>Seus grupos:</h3>
          {rendered ? (
            groups.length > 0 ? (
              <GroupList />
            ) : (
              <div>
                <h1>Adicione grupo</h1>
              </div>
            )
          ) : null}
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
