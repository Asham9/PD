import styled from 'styled-components'

const Wrapper=styled.nav`
.navbar {
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #FF4F00;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
  
}

.nav-item:hover {
  background-color: #eee;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.login-btn {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #333;
  border-radius: 4px;
}

.login-btn:hover {
  background-color: #eee;
}

.get-started-btn {
  background-color: #FF4F00;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.get-started-btn:hover {
  background-color: #cc3f00;
}

/* Dropdowns */
.dropdown {
  /* position: relative; */
}

.dropdown-menu {
  display: none;
  position: fixed;
  top: 74px;
  left: 320px;
  min-width: 700px;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 5px 10px rgba(0,0,0,0.05);
  padding: 0.5rem 0;
  z-index: 999;
  transition-delay:200ms;
  transition-duration:200ms;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-menu li:hover {
  background-color: #f5f5f5;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #ccc;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .auth-buttons {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
`
export default Wrapper