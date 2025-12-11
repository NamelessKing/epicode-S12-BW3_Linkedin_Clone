import {useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { changeActiveToken } from "../../config/constants"
import { useNavigate } from "react-router-dom"
import { BEARER_TOKENS } from "../../config/constants"

const LoginForm = () => {
    const [keyName, setKeyName] = useState("")
    const navigate = useNavigate()



    const changeActiveKey = () => {
        let ACTIVE_TOKEN
          switch (keyName) {
            case "tanjin":
                (ACTIVE_TOKEN = BEARER_TOKENS.tanjin)
              return changeActiveToken(ACTIVE_TOKEN)
              break
            case "fabio":
                  (ACTIVE_TOKEN = BEARER_TOKENS.fabio)
                  return changeActiveToken(ACTIVE_TOKEN)
              break
            case "andrea":
                  (ACTIVE_TOKEN = BEARER_TOKENS.andrea)
                  return changeActiveToken(ACTIVE_TOKEN)
              break
            case "matteo":
                  (ACTIVE_TOKEN = BEARER_TOKENS.matteo)
                  return changeActiveToken(ACTIVE_TOKEN)
              break
            case "rossella":
                  (ACTIVE_TOKEN = BEARER_TOKENS.rossella)
                  return changeActiveToken(ACTIVE_TOKEN)
              break
            default:
                  (ACTIVE_TOKEN = BEARER_TOKENS.rossella)
                  return changeActiveToken(ACTIVE_TOKEN)
        }
            
        }
    console.log("Token attivo cambiato in: ", keyName)
    console.log("console della funzione",changeActiveKey())
    

    useEffect(() => { changeActiveKey() }, [keyName])
    
    return (
        <Form onSubmit={changeActiveKey}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Scegli il tuo profilo</Form.Label>
                <Form.Select onChange={(e) => { setKeyName(e.target.value) }}>
                    <option value="rossella">Rossella</option>
                    <option value="tanjin">Tanjin</option>
                    <option value="matteo">Matteo</option>
                    <option value="fabio">Fabio</option>
                    <option value="andrea">Andrea</option>
                </Form.Select>
            </Form.Group>
            <Button type="button" onClick={() => navigate("/")}>Entra</Button>
        </Form>
    )
}

export default LoginForm