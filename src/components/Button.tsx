function Button({ title, text }: { title: string; text: string }) {
    return (
      <div>
        <p>{title}</p>
        <button className="btn">{text}</button>
      </div>
    );
  }
  
  export default Button;