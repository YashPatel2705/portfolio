export default function Button({ text, primary, className }) {
    return (
      <button
        className={`px-6 py-3 font-semibold ${
          primary ? 'bg-dark text-white' : 'border border-dark'
        } ${className}`} 
      >
        {text}
      </button>
    );
  }
  