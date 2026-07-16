import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/officers', label: 'Officers' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
  { to: '/donate', label: 'Donate' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Leland High School Math Club</p>
      </div>
    </footer>
  )
}
