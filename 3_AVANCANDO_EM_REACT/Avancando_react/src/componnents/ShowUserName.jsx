// passa o nome props, quer dizer que está esperando receber propriedades dele
const ShowUserName = (props) => {
  return (
    <div>
        {/* coloca a props + a propriedade que é name */}
        <h2>O nome do usuário é: {props.name} </h2>
    </div>
  )
}

export default ShowUserName