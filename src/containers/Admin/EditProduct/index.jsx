import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { api } from '../../../services/api';
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage,
  ContainerCheckbox,
} from './styles';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.object().required('Escolha uma categoria'),
  offer: yup.bool(),
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const product =
    location.state && location.state.product ? location.state.product : null;

  const {
    register,
    handleSubmit,
    control,
    setValue, // Adicionado para setar os valores dinamicamente
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
    }

    loadCategories();
  }, []);

  // Esse useEffect vai preencher o formulário assim que o produto carregar na tela
  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('price', product.price / 100);
      setValue('category', product.category);
      setValue('offer', product.offer);
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);

    if (data.file && data.file[0]) {
      productFormData.append('file', data.file[0]);
    }

    productFormData.append('offer', data.offer);

    // Ajustado para garantir que não quebre se o product for null no build
    const productId = product ? product.id : '';

    await toast.promise(api.put(`/products/${productId}`, productFormData), {
      pending: 'Editando Produto',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto, tente novamente',
    });

    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Nome</Label>
            <Input type="text" {...register('name')} />
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Preço</Label>
            <Input type="number" {...register('price')} />
            <ErrorMessage>{errors?.price?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <LabelUpload>
              <Image />
              <input
                type="file"
                {...register('file')}
                accept="image/png, image/jpeg"
                onChange={(value) => {
                  setFileName(value.target.files[0]?.name);
                  register('file').onChange(value);
                }}
              />
              {fileName || 'Upload do Produto'}
            </LabelUpload>
            <ErrorMessage>{errors?.file?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Categoria</Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categories}
                  getOptionLabel={(category) => category.name}
                  getOptionValue={(category) => category._id}
                  placeholder="Categorias"
                  menuPortalTarget={document.body}
                />
              )}
            />
            <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <ContainerCheckbox>
              <input type="checkbox" {...register('offer')} />
              <Label>Produtos em Oferta ?</Label>
            </ContainerCheckbox>
          </InputGroup>

          <SubmitButton>Editar Produto</SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
