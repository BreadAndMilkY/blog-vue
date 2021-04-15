function useWebSocket (handleMessage) {
  const user = window.sessionStorage.getItem('user')
  const username = JSON.parse(user).username
  const ws = new WebSocket(`ws://39.108.136.207:9002/chat/${username}`)
  const init = () => {
    bindEvent()
  }
  function bindEvent () {
    ws.addEventListener('open', handleOpen, false)
    ws.addEventListener('close', handleClose, false)
    ws.addEventListener('error', handleError, false)
    ws.addEventListener('message', handleMessage, false)
  }
  function handleOpen (e) {
    console.log('open', e)
  }
  function handleClose (e) {
    console.log('close', e)
  }
  function handleError (e) {
    console.log('error', e)
  }
  init()
  return ws
}

export default useWebSocket
