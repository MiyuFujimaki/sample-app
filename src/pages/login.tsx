import React from 'react';
import { useRouter } from 'next/router';

const loginPage = () => {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <div style={{ margin: '50px 0px 30px 0px' }}>
          <span className="large-text">ログイン</span>
        </div>
        <div style={{ margin: '20px 0' }}>
        <span className='middle-text'>ログイン画面です</span>
        </div>
      </div>
    </div>
  );
};

export default loginPage;