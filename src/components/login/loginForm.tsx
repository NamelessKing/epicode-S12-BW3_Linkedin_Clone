import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BEARER_TOKENS } from "../../config/constants"
import { useAppDispatch } from "../../store"
import { loginUser } from "../../store/userSlice"

const LoginForm = () => {
  const [keyName, setKeyName] = useState("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const changeActiveKey = () => {
    let ACTIVE_TOKEN
    switch (keyName) {
      case "tanjin":
        ACTIVE_TOKEN = BEARER_TOKENS.tanjin
        break
      case "fabio":
        ACTIVE_TOKEN = BEARER_TOKENS.fabio
        break
      case "andrea":
        ACTIVE_TOKEN = BEARER_TOKENS.andrea
        break
      case "matteo":
        ACTIVE_TOKEN = BEARER_TOKENS.matteo
        break
      case "rossella":
        ACTIVE_TOKEN = BEARER_TOKENS.rossella
        break
      default:
        ACTIVE_TOKEN = BEARER_TOKENS.rossella
    }
    dispatch(loginUser(ACTIVE_TOKEN))
  }

  useEffect(() => {
    changeActiveKey()
  }, [keyName])

  return (
    <Form onSubmit={changeActiveKey}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Scegli il tuo profilo</Form.Label>
        <Form.Select
          onChange={(e) => {
            setKeyName(e.target.value)
          }}
        >
          <option value="rossella">Rossella</option>
          <option value="tanjin">Tanjin</option>
          <option value="matteo">Matteo</option>
          <option value="fabio">Fabio</option>
          <option value="andrea">Andrea</option>
        </Form.Select>
        <Button type="submit" onClick={() => navigate('/')}>Entra</Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm