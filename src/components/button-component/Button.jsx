

const Button = ({backgroundColor, border, borderRadius, padding, textColor, text}) => {
    
    const buttonStyle = {
        backgroundColor: backgroundColor || '#E78B13',
        border: border || 'none',
        borderRadius: borderRadius || '10px',
        padding: padding || '5px 15px',
        color: textColor || 'white'
    }
  return (
    <button style={buttonStyle}>
      {text || 'Button'}
    </button>
  )
}

export default Button
