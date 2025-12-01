"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ 
      background: '#ffffff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ 
        fontSize: '6rem', 
        fontWeight: 'bold', 
        color: '#9c5d00',
        margin: 0 
      }}>
        404
      </h1>
      <h2 style={{ 
        fontSize: '2rem', 
        color: '#4f5260',
        marginTop: '1rem',
        marginBottom: '1rem'
      }}>
        Page Not Found
      </h2>
      <p style={{ 
        color: '#4f5260',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        The page you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        style={{
          padding: '0.75rem 2rem',
          background: '#9c5d00',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: '500',
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Go Back Home
      </Link>
    </div>
  );
}

