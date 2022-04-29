import { Outlet } from "react-router-dom";
import { Container, Stack } from '@mui/material';
import PageLink from './components/PageLink';

const App = () => {
  return (
    <Container maxWidth="lg">
      <h1>Fluffy Palms</h1>
      <Stack spacing={2} direction="row">
        <PageLink to="/authors" variant="outlined" text="Authors" />
        <PageLink to="/Blog" variant="outlined" text="Blog" />
      </Stack>
      <Outlet />
    </Container>
  );
}

export default App;
