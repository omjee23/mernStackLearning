export default function Navigation() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand img" />
        </div>
        <ul className="navUl">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="loginBtn">Login</button>
      </nav>
    </>
  );
}
