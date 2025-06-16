import { List, Datagrid, TextField, BulkDeleteButton } from "react-admin";
import YearField from "../components/YearField";

const AuthorList = () => (
  <List>
    <Datagrid
      bulkActionButtons={
        <BulkDeleteButton
          mutationMode="pessimistic"
          confirmTitle="Delete Authors"
          confirmContent="Are you sure you want to delete the selected authors? This will also delete all their books."
        />
      }
    >
      <TextField source="id" />
      <TextField source="name" />
      <YearField
        source="birthYear"
        options={{ useGrouping: false }}
        label="Birth Year"
      />
    </Datagrid>
  </List>
);

export default AuthorList;
