import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import AuthorReferenceInput from "../components/AuthorReferenceInput";
import BookEditActions from "./components/BookEditActions";
import EditToolbar from "./components/EditToolbar";

const BookEdit = () => {
  return (
    <Edit actions={<BookEditActions />}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="title" fullWidth />
        <AuthorReferenceInput source="authorId" />
        <NumberInput source="publishedYear" />
      </SimpleForm>
    </Edit>
  );
};

export default BookEdit;
