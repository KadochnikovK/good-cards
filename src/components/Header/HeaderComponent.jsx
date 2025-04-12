export default function Header({ scrollToFooter }) {
    return (
      <header className="header">
        <h1>Goods List</h1>
        <button onClick={scrollToFooter} className="scroll-button">
          Scroll to Footer
        </button>
      </header>
    );
  };