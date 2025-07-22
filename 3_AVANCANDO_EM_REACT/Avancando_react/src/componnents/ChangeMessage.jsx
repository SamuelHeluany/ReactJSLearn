
const ChangeMessage = ({handleMessage}) => {
    const messages = ['Oi', 'Olá', 'Beleza?']
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>0</button>
        <button onClick={() => handleMessage(messages[1])}>1</button>
        <button onClick={() => handleMessage(messages[2])}>2</button>
    </div>
  )
}
export default ChangeMessage