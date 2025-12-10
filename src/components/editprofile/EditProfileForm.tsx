import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css'
import { useAppSelector } from '../../store';
import { useAppDispatch } from '../../store';
import { useState } from 'react';
import { updateCurrentUser } from '../../store/userSlice';
import type { UpdatedUserProfile } from '../../types/user';


const EditProfileForm = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector((state) => state.user.data)
  // const loading = useAppSelector(state => state.user.loading);

  const [state, setState] = useState<UpdatedUserProfile>({
    name: currentUser?.name || "",
    surname: currentUser?.surname || "",
    bio: currentUser?.bio || "",
    email: currentUser?.email || "",
    username: currentUser?.username || "",
    title: currentUser?.title || "",
    area: currentUser?.area || "",
    image: currentUser?.image  || "",
  })


  // if (currentUser && !state.name && !state.surname) {
  //  setState({
  //    name: currentUser?.name || "",
  //    surname: currentUser?.surname || "",
  //    bio: currentUser?.bio || "",
  //    email: currentUser?.email || "",
  //    username: currentUser?.username || "",
  //    title: currentUser?.title || "",
  //    area: currentUser?.area || "",
  //    image: currentUser?.image || "",
  //  })
  // }
  
  const modifyUser = async (e: React.FormEvent) => {
     e.preventDefault()
    await dispatch(updateCurrentUser(state))
  }

  return (
    <>
      <Form className="mt-4 px-3" onSubmit={modifyUser}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.name}
            value={state.name}
            onChange={(e) => {
              setState({
                ...state,
                name: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.surname}
            value={state.surname}
            onChange={(e) => {
              setState({
                ...state,
                surname: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.username}
            value={state.username}
            onChange={(e) => {
              setState({
                ...state,
                username: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={currentUser?.email}
            value={state.email}
            onChange={(e) => {
              setState({
                ...state,
                email: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Biografia</Form.Label>
          <Form.Control
            type="textbox"
            placeholder={currentUser?.bio}
            value={state.bio}
            onChange={(e) => {
              setState({
                ...state,
                bio: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Titolo</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.title}
            value={state.title}
            onChange={(e) => {
              setState({
                ...state,
                title: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.area}
            value={state.area}
            onChange={(e) => {
              setState({
                ...state,
                area: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Immagine del profilo</Form.Label>
          <Form.Control
            type="file"
            placeholder={currentUser?.image}
            value={state.image}
            onChange={(e) => {
              setState({
                ...state,
                image: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Button className="btn btn-outline-primary fs-5" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
};

export default EditProfileForm;
