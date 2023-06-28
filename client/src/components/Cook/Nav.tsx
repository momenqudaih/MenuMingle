import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        marginBottom: '20px',
        overflow: 'hidden',
      }}
    >
      <Toolbar>
        <img
          src={logo}
          alt="Logo"
          style={{
            marginRight: '10px',
            marginTop: '10px',
            height: '80px',
            width: '80px',
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 2,
            color: 'grey',
            alignItems: 'right',
            fontFamily: 'cursive',
            fontSize: '20px',
          }}
        >
          Welcome back, Let&apos;s kick off another day of success
        </Typography>
        <div
          style={{ display: 'flex', gap: '20px', height: '100%', marginRight: '20px' }}
        >
          <NavLink
            to="/cook/incoming"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isActive ? '#FA4A0C' : 'black',
                textDecoration: 'none',
              };
            }}
          >
            Incoming
          </NavLink>
          <NavLink
            to="/cook/inprogress"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isActive ? '#FA4A0C' : 'black',
                textDecoration: 'none',
              };
            }}
          >
            InProgress
          </NavLink>
          <NavLink
            to="/cook/done"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isActive ? '#FA4A0C' : 'black',
                textDecoration: 'none',
              };
            }}
          >
            Done
          </NavLink>
        </div>
        <IconButton
          color="inherit"
          aria-label="Orders"
          sx={{ color: 'black' }}
          onClick={() => {
            navigate('/login');
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
