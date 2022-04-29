import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const PageLink = ({ to, variant, text}) => (
    <Link to={to} style={{ textDecoration: 'none' }}>
        <Button variant={variant}>{text}</Button>
    </Link>
);

export default PageLink;
