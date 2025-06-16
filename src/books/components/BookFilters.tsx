import { TextInput, ReferenceInput, SelectInput } from "react-admin";

const BookFilters = [
  <TextInput key="search" label="Search Title" source="q" alwaysOn />,
  <ReferenceInput
    key="author"
    label="Author"
    source="authorId"
    reference="authors"
  >
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export default BookFilters;
