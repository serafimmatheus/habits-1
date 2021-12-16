import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { MdOutlineCategory } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";
import {
  ButtonSubs,
  ContainerCardsG,
  ContainerEdit,
  ContainerGroupCard,
  ContainerRabbit,
  GroupCardContainer,
  GroupListContainerS,
} from "../../Styles/global";
import EditGroupsModal from "../EditGroupsModal";
const SubGroups = () => {
  const [modalEdit, setModalEdit] = useState(false);
  const { myGroups, unsubscribeGroups } = useContext(GroupsContext);
  return (
    <>
      <GroupListContainerS>
        {myGroups.map((group) =>
          group.length === 0 ? (
            <h1>Nada aqui </h1>
          ) : (
            <GroupCardContainer key={group.id}>
              <ContainerRabbit>
                <GiRabbit size={30} color="darkbronw" />
              </ContainerRabbit>
              <ContainerCardsG>
                <ContainerGroupCard>
                  <h3>
                    <GoDiffRenamed color="red" />
                    Nome do grupo: <span>{group.name}</span>
                  </h3>
                </ContainerGroupCard>
                <ContainerGroupCard>
                  <h3>
                    <MdOutlineCategory color="blue" />
                    Categoria: <span>{group.category}</span>
                  </h3>{" "}
                </ContainerGroupCard>{" "}
                <ContainerGroupCard>
                  <h3>
                    <MdOutlineDescription color="green" overlinePosition={10} />
                    Descrição: <span> {group.description}</span>
                  </h3>
                </ContainerGroupCard>{" "}
              </ContainerCardsG>
              <ContainerEdit>
                <ButtonSubs onClick={() => unsubscribeGroups(group.id)}>
                  Desinscrever-se
                </ButtonSubs>

                <ButtonSubs onClick={() => setModalEdit(true)}>
                  Editar
                </ButtonSubs>
                {modalEdit && (
                  <>
                    <EditGroupsModal id={group.id} setmodalEdit={setModalEdit}>
                      <ButtonSubs onClick={() => setModalEdit(false)}>
                        Fechar
                      </ButtonSubs>
                    </EditGroupsModal>
                  </>
                )}
              </ContainerEdit>
            </GroupCardContainer>
          )
        )}
      </GroupListContainerS>
    </>
  );
};
export default SubGroups;
