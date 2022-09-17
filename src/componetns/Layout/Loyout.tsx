import { useRouter } from 'next/router';
import Navbar from '../NavBar/NavBar';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div>
      {!router.pathname.includes('/login') ? (
        <>
          <Navbar />
          <div style={{ padding: '40px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {children}
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
