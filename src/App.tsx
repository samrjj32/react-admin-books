import { Admin, Resource, bwLightTheme, bwDarkTheme } from "react-admin";
import dataProvider from "./dataProvider";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";

import BookList from "./books/BookList";
import BookEdit from "./books/BookEdit";
import AuthorList from "./authors/AuthorList";
import BookCreate from "./books/BookCreate";

const App = () => (
  <Admin
    dataProvider={dataProvider}
    theme={bwLightTheme}
    darkTheme={bwDarkTheme}
  >
    <Resource
      name="books"
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
      icon={MenuBookIcon}
    />
    <Resource name="authors" list={AuthorList} icon={PeopleIcon} />
  </Admin>
);

export default App;
