import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
} from './styles';
import { SubmitButton } from './styles';

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Container>
        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <Label>Preço</Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <LabelUpload>
              <Image />
              <input type="file" />
            </LabelUpload>
          </InputGroup>

          <InputGroup>
            <Label>Categoria</Label>
            <Select />
          </InputGroup>

          <SubmitButton>Adicionar Produto</SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
