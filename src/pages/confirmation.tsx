import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import InformationB from './informationB';

const ConfirmationPage = () => {
  const router = useRouter();
  const formData = JSON.parse(sessionStorage.getItem('formData') || '{}');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('formData');
      if (storedData) {
        formData(JSON.parse(storedData));
      }
    }
  }, []);

  const handleBack = () => {
    router.push('/informationB'); // 前のページに戻る
  };

  const handleSubmit = () => {
    // サーバーにデータを送信するなどの処理を行う
    console.log('登録する', formData);
    sessionStorage.removeItem('formData'); // セッションストレージをクリアする
    router.push('/complete'); // 完了ページへ遷移する
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <div style={{ margin: '50px 0px 30px 0px' }}>
          <span className="large-text">会員登録</span>
        </div>
        <div style={{ margin: '30px 0px 20px' }}>
          <span className='middle-text'>入力内容確認</span>
        </div>
        <div style={{ textAlign: 'left', margin: '20px 0' }}>
          <p><strong>氏名:</strong> {formData.name || '入力なし'}</p>
          <p><strong>年齢:</strong> {formData.age || '入力なし'}</p>
          <p><strong>性別:</strong> {formData.gender || '入力なし'}</p>
          <p><strong>郵便番号:</strong> {formData.postalCode || '入力なし'}</p>
          <p><strong>都道府県:</strong> {formData.prefecture || '入力なし'}</p>
          <p><strong>行政区:</strong> {formData.city || '入力なし'}</p>
          <p><strong>番地:</strong> {formData.address || '入力なし'}</p>
          <p><strong>建物名・部屋番号:</strong> {formData.building || '入力なし'}</p>
          <p><strong>電話番号:</strong> {formData.phone || '入力なし'}</p>
          <p><strong>どこでこのサイトを知りましたか？:</strong> {formData.siteSource ? formData.siteSource.join(', ') : '入力なし'}</p>
          <p><strong>好きな果物を教えて下さい:</strong> {formData.favoriteFruits ? formData.favoriteFruits.join(', ') : '入力なし'}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <button onClick={handleBack} style={{ padding: '10px 40px', backgroundColor: '#ddd', color: '#000', border: 'none', borderRadius: '5px' }}>
            戻る
          </button>
          <button onClick={handleSubmit} style={{ padding: '10px 40px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
            登録する
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;