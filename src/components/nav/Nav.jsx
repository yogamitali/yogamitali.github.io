import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AppBar, Container, Toolbar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import './nav.css'


const Nav = () => {
  
  const pages = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Classes', path: '/classes'},
    {name: 'Testimonials', path: '/testimonials'}
  ]

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return ( 
    <AppBar position='sticky'
            className='appbar'
          >
      <Container maxWidth='xl'>
        <Link to='home' style={{cursor: 'pointer'}}>
          <img src='images/logo.png' className='logo' alt='Yogamitali Logo'/>
        </Link>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
                size='large'
                aria-label='navigation hamburger'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                sx={{
                  color: 'var(--color-primary)'
                }}
              >
              <MenuIcon />
            </IconButton>
            <Menu id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    color: 'var(--color-primary)'
                  }}
                >
              {pages.map((page) => (
                <NavLink to={page.path} className='nav-link'>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ fontWeight: 'inherit' }}>
                    {page.name}
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', borderTop: '1px solid var(--color-primary)', borderBottom: '1px solid var(--color-primary)' }}>
            {pages.map((page) => {
              return (
                <NavLink to={page.path} className='nav-link'>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ fontWeight: 'inherit' }}>
                    {page.name}
                  </MenuItem>
                </NavLink>
            )})}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav