import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  BulkDeleteButton,
  Pagination,
} from "react-admin";
import BookFilters from "./components/BookFilters";
import YearField from "../components/YearField";

const BookList = () => (
  <List
    filters={BookFilters}
    perPage={10}
    pagination={<Pagination rowsPerPageOptions={[5, 10, 25, 50]} />}
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid
      bulkActionButtons={
        <BulkDeleteButton
          mutationMode="pessimistic"
          confirmTitle="Delete Books"
          confirmContent="Are you sure you want to delete the selected books?"
        />
      }
    >
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="authors">
        <TextField source="name" />
      </ReferenceField>
      <YearField
        source="publishedYear"
        options={{ useGrouping: false }}
        label="Year"
      />
      <EditButton />
    </Datagrid>
  </List>
);

export default BookList;
