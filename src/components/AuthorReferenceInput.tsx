import { ReferenceInput, SelectInput } from "react-admin";

const AuthorReferenceInput = ({ source }: { source: string }) => (
  <ReferenceInput label="Author" source={source} reference="authors">
    <SelectInput optionText="name" />
  </ReferenceInput>
);

export default AuthorReferenceInput;
