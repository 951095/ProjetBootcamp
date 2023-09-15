import "./style.css";

const Index = () => {

  const menu = [
    { title:"Home"},
    { title:"News"},
    { title:"Register"},
    { title:"Contact"},

  ]

  return (
    <header className="header__main">
      <div className="header__logo">
      <img src="../news.png" alt="logo news" />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          {
            menu.map(menuItem => (
              <li className="item__nav">
                <a className="item__link" href="#">{menuItem.title}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Index;