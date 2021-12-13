const GroupCard = ({ name, description, category }) => {
  return (
    <ul>
      <li>
        <strong>Nome do grupo: </strong>
        {name}
      </li>
      <li>
        <strong>Descrição: </strong>
        {description}
      </li>
      <li>
        <strong>Categoria:</strong>
        {category}
      </li>
    </ul>
  );
};
export default GroupCard;
