export default function Layout({ children }) {
  return (
      <div>
        <div className='bg-red-500 text=white'>Its auth layout</div>
        {children}
      </div>
  )
}
