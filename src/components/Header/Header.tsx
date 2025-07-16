// src/components/Header/Header.tsx
import "./Header.css";

const Header = () => {
  return (
    <header>
      <figure>
        <img src="/logo.svg" alt="logo" />
      </figure>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Team</li>
          <li>Pricing</li>
          <li>Enterprise</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
