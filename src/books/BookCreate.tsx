import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import CreateActions from "./components/CreateActions";

const BookCreate = () => {
  return (
    <Create actions={<CreateActions />}>
      <SimpleForm>
        <ReferenceInput source="authorId" reference="authors" fullWidth />
        <TextInput source="title" fullWidth />
        <TextInput source="publishedYear" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default BookCreate;
