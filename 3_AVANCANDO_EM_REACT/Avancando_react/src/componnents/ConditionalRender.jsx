
const ConditionalRender = () => {
    const x = 5;
  return (
    <div>
        <h3>Está aparecendo?</h3>
        {x > 2 && <h1>VERDADEIRO</h1>}
    </div>
  )
}

export default ConditionalRender