
const ConditionalRender = () => {
    const x = 3;
  return (
    <div>
        <h3>Está aparecendo?</h3>
        {x > 2 ? 
        (<div>
          <p>O numero é maior que 2</p>
        </div>

        ) : (

        <div>
          <p>O numero é menor que 2</p>
        </div>)}
    </div>
  )
}

export default ConditionalRender