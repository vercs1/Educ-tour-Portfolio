const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-900 text-primary-200 border border-primary-700 ${className}`}>
      {children}
    </span>
  )
}

export default Badge

