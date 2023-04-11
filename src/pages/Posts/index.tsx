import { useState } from "react";
import { Button } from "../../components/Button";
import { EditIcon } from "../../components/Icons/EditIcon";
import { TrashIcon } from "../../components/Icons/TrashIcon";
import { Input } from "../../components/Input";
import H1 from "../../components/Typhograpy/H1";
import P from "../../components/Typhograpy/P";
import * as S from "./styles";

export const Posts = () => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const onCloseModalHandler = () => {
    setOpenModalDelete(false);
  };
  return (
    <>
      <S.Container>
        <S.Header>
          <H1 color="#FFFFFF">CodeLeap Network</H1>
        </S.Header>

        <S.Content>
          <S.InputData>
            <H1>What’s on your mind?</H1>

            <Input label="Title" placeholder="Hello World" />
            <Input label="Content" placeholder="Content Hele" />

            <S.Section>
              <Button title="Create" />
            </S.Section>
          </S.InputData>

          <S.UniquePost>
            <S.BoxHeader>
              <H1 color="#FFFFFF">My First Post at CodeLeap Network!</H1>
              <div>
                <button onClick={() => setOpenModalDelete(true)}>
                  <TrashIcon />
                </button>
                <button onClick={() => setOpenModalEdit(true)}>
                  <EditIcon />
                </button>
              </div>
            </S.BoxHeader>

            <S.PostContent>
              <S.PostHeader>
                <P color="#777777" weigth="bold">
                  @gustavo
                </P>
                <P color="#777777">Há 3 minutos</P>
              </S.PostHeader>

              <P>
                Curabitur suscipit suscipit tellus. Phasellus consectetuer
                vestibulum elit. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Maecenas egestas
                arcu quis ligula mattis placerat. Duis vel nibh at velit
                scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean
                posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
                sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel
                sem. Nullam cursus lacinia erat.
              </P>
            </S.PostContent>
          </S.UniquePost>

          <S.UniquePost>
            <S.BoxHeader>
              <H1 color="#FFFFFF">My First Post at CodeLeap Network!</H1>
              <div>
                <TrashIcon />
                <EditIcon />
              </div>
            </S.BoxHeader>

            <S.PostContent>
              <S.PostHeader>
                <P color="#777777" weigth="bold">
                  @gustavo
                </P>
                <P color="#777777">Há 3 minutos</P>
              </S.PostHeader>

              <P>
                Curabitur suscipit suscipit tellus. Phasellus consectetuer
                vestibulum elit. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Maecenas egestas
                arcu quis ligula mattis placerat. Duis vel nibh at velit
                scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean
                posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
                sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel
                sem. Nullam cursus lacinia erat.
              </P>
            </S.PostContent>
          </S.UniquePost>

          <S.UniquePost>
            <S.BoxHeader>
              <H1 color="#FFFFFF">My First Post at CodeLeap Network!</H1>
              <div>
                <TrashIcon />
                <EditIcon />
              </div>
            </S.BoxHeader>

            <S.PostContent>
              <S.PostHeader>
                <P color="#777777" weigth="bold">
                  @gustavo
                </P>
                <P color="#777777">Há 3 minutos</P>
              </S.PostHeader>

              <P>
                Curabitur suscipit suscipit tellus. Phasellus consectetuer
                vestibulum elit. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Maecenas egestas
                arcu quis ligula mattis placerat. Duis vel nibh at velit
                scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean
                posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
                sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel
                sem. Nullam cursus lacinia erat.
              </P>
            </S.PostContent>
          </S.UniquePost>
        </S.Content>
      </S.Container>

      {openModalDelete && (
        <S.Modal>
          <S.BoxModal>
            <H1>Are you sure you want to delete this item?</H1>

            <S.Section>
              <Button
                title="Cancel"
                textColor="#000000"
                backgroundColor="#fff"
                openModal={openModalDelete}
                setIsActive={onCloseModalHandler}
              />
              <Button title="Delete" backgroundColor="#FF5151" />
            </S.Section>
          </S.BoxModal>
        </S.Modal>
      )}

      {openModalEdit && (
        <S.Modal>
          <S.BoxModal>
            <H1>Edit Item</H1>

            <Input label="Title" placeholder="Hello World" />
            <Input label="Content" placeholder="Content Hele" />

            <S.Section>
              <Button
                title="Cancel"
                textColor="#000000"
                backgroundColor="#fff"
                openModal={openModalEdit}
                setIsActive={() => setOpenModalEdit(false)}
              />
              <Button title="Save" backgroundColor="#47B960" />
            </S.Section>
          </S.BoxModal>
        </S.Modal>
      )}
    </>
  );
};
