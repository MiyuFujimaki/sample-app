import React from 'react';
import { useRouter } from 'next/router';

const CompletePage = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login'); // ログインページへ遷移する
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <div style={{ margin: '50px 0px 30px 0px' }}>
          <span className="large-text">会員登録</span>
        </div>
        <div style={{ margin: '30px 0px 20px' }}>
          <span className='middle-text'>登録が完了しました。</span>
        </div>
        <div style={{ margin: '20px 0' }}>
          <a href="#" onClick={handleLoginRedirect} style={{ color: '#0070f3' }}>
          <span className='middle-text'>ログイン画面へ</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
