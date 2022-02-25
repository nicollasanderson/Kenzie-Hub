import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import {
  CardTech,
  DivButtonModal,
  DivInfoUser,
  DivTechInfos,
  HeaderContainer,
  MainContainer,
  MainInfos,
  TechListContainer,
} from "./style";
import { useState } from "react";
import InputStyled from "../../components/Input";
import Select from "../../components/Select";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Modal from "../../components/Modal";

function Dashboard({ session, setSession, userId, setUserId }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo necessário"),
    status: yup.string().required("Campo necessário"),
  });

  const arrLevel = ["Iniciante", "Intermediário", "Avançado"];
  const [activeModal, setActiveModal] = useState();
  const [arrTechs, setArrTechs] = useState([]);
  const [cardId, setCardId] = useState(0);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function refreshArr() {
    api
      .get(`/users/${userId}`)
      .then((response) => setArrTechs(response.data.techs));
  }

  function onSubmit(data) {
    console.log(data);
    const token = window.localStorage.getItem("@kenziehub:token");
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        refreshArr();
        setActiveModal();
        return toast.success("Linguagem adicionada :D");
      })
      .catch((err) => toast.error("algo de errado não está certo"));
  }

  function updateTech(data) {
    const token = window.localStorage.getItem("@kenziehub:token");
    api
      .put(`/users/techs/${cardId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setActiveModal();
        refreshArr();
        return toast.success("Linguagem Atualizada! :D");
      })
      .catch(() => toast.error("Algo saiu errado :C"));
  }

  function deleteTech() {
    const token = window.localStorage.getItem("@kenziehub:token");
    api
      .delete(`/users/techs/${cardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setActiveModal();
        refreshArr();
        toast.success("Linguagem excluida! :D");
      })
      .catch(() => toast.error("Algo saiu errado :C"));
  }

  useEffect(() => {
    setUserId(window.localStorage.getItem("@kenziehub:userId"));
    api
      .get(`/users/${userId}`)
      .then((response) => setArrTechs(response.data.techs));
  }, []);

  console.log(arrTechs);
  if (!session) {
    history.push("/");
  }
  return (
    <MainContainer>
      {activeModal === "modalTech" && (
        <Modal
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          setActivemodal={setActiveModal}
          funcao={onSubmit}
          modalName="Cadastrar Tecnologia"
        >
          <InputStyled
            name="title"
            register={register}
            label="Nome"
            placeholder="Typescript"
          />
          <Select
            name="status"
            label="Selecionar status"
            arr={arrLevel}
            register={register}
          />
          <Button
            type="submit"
            name="Cadastrar Tecnologia"
            color="var(--primary)"
          />
        </Modal>
      )}
      {activeModal === "techCard" && (
        <Modal
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          setActivemodal={setActiveModal}
          modalName="Tecnologia Detalhes"
          funcao={updateTech}
        >
          <InputStyled
            name="title"
            register={register}
            label="Nome do projeto"
            placeholder="Typescript"
          />
          <Select
            name="status"
            label="Status"
            arr={arrLevel}
            register={register}
          />
          <DivButtonModal>
            <Button
              type="submit"
              name="Salvar alterações"
              color="var(--primary)"
              tamanho="183px"
            />
            <Button
              tamanho="110px"
              type="button"
              name="Excluir"
              color="var(--grey1)"
              onClick={() => deleteTech()}
            />
          </DivButtonModal>
        </Modal>
      )}
      <HeaderContainer>
        <h2>Kenzie Hub</h2>
        <Button
          onClick={() => {
            localStorage.clear();
            setSession(false);
            history.push("/");
          }}
          color="var(--grey3)"
          name="Sair"
        />
      </HeaderContainer>
      <DivInfoUser>
        <div>
          <h3>Olá, user</h3>
          <p>Primeiro módulo (introdução ao Frontend)</p>
        </div>
      </DivInfoUser>
      <MainInfos>
        <DivTechInfos>
          <div>
            <h3>Tecnologias</h3>
            <Button
              onClick={() => setActiveModal("modalTech")}
              name="+"
              color="var(--grey3)"
            />
          </div>
        </DivTechInfos>
        <TechListContainer>
          <div>
            {arrTechs.map((element) => (
              <CardTech
                onClick={() => {
                  setActiveModal("techCard");
                  setCardId(element.id);
                }}
                key={element.id}
              >
                <h3>{element.title}</h3>
                <p>{element.status}</p>
              </CardTech>
            ))}
          </div>
        </TechListContainer>
      </MainInfos>
    </MainContainer>
  );
}

export default Dashboard;
