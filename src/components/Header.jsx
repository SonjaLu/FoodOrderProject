import logoImg from '../assets/logo.png';

export default function Header() {
  return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A restaurant"/>
      <h1>FoodOrder</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}