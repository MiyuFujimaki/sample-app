import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const informationA = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);

    const prefecture = [
      { name: '選択してください', value: '選択してください' },
      { name: '北海道', value: '北海道' },
      { name: '青森県', value: '青森県' },
      { name: '宮城県', value: '宮城県' },
  ];
  };
  const handleBack = () => {
    router.push('/terms'); // 前のページに戻る
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
        .required('必須'),
        firstName: Yup.string()
        .required('必須'),
        age: Yup.number()
        .required('必須')
        .min(0, '0以上の数値を入力してください')
        .integer('整数を入力してください'),
        gender: Yup.string()
        .required('必須'),
        postalCode: Yup.string()
        .required('必須')
        .matches(/^\d{7}$/, 'ハイフン無し7桁'),
        prefecture: Yup.string()
        .required('必須'),
        city: Yup.string()
        .required('必須'),
        address: Yup.string()
        .required('必須'),
        building: Yup.string(),
        phoneNumber: Yup.string()
        .required('必須')
        .matches(/^\d{11}$/, 'ハイフン無し11桁以内'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const allData = {
          ...JSON.parse(sessionStorage.getItem('formData') || '{}'),
          ...values
        };
        console.log(allData); // 全てのデータを確認するためのログ
        // ここでサーバーにデータを送信するなどの処理を行う
        sessionStorage.removeItem('formData'); // セッションストレージをクリアする
        router.push('/informationB'); // 会員情報入力画面2/2ページへ遷移する
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
              <div style={{ margin: '50px 0px 30px 0px'}}>
                <span className="large-text">会員登録</span>
              </div>
              <div style={{ margin: '30px 0px 20px' }}>
                <span className='middle-text'>会員情報入力 1/2</span>
              </div>
              {/* 氏名 */}
              <div>
                <label htmlFor="lastName" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>氏名（必須）
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="lastName"
                  name="lastName"
                  type="text"
                  />
                  <ErrorMessage name="lastName">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 年齢 */}
              <div>
                <label htmlFor="age" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>年齢（必須）
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="age"
                  name="age"
                  type="text"
                  placeholder="テキストを追加"
                  />
                  <ErrorMessage name="age">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 性別 */}
              <div>
                <label htmlFor="gender" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>性別（必須）
                  <div style={{marginTop: '10px'}}>
                  <Field style = {{margin: '0px 7px 0px 7px'}}
                  value="男性"
                  type="radio"
                  checked={selectedOption === "男性"}
                  onChange={handleOptionChange}
                  />男性
                  <Field style = {{margin: '0px 7px 0px 7px'}}
                  value="女性"
                  type="radio"
                  checked={selectedOption === "女性"}
                  onChange={handleOptionChange}
                  />女性
                  <Field style = {{margin: '0px 7px 0px 7px'}}
                  value="選択しない"
                  type="radio"
                  checked={selectedOption === "選択しない"}
                  onChange={handleOptionChange}
                  />選択しない
                  <ErrorMessage name="gender">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>

              {/* 郵便番号 */}
              <div>
                <label htmlFor="postalCode" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>郵便番号（必須）
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  />
                  <ErrorMessage name="postalCode">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 都道府県 */}
              <div>
                <label htmlFor="prefecture" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>郵便番号（必須）
                  <div>
                  <Field
                  as="select"
                  name="prefecture"
                  style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  >
                  <option value="">選択してください</option>
                  <option value="東京都">東京都</option>
                  <option value="大阪府">大阪府</option>
                  <option value="愛知県">愛知県</option>
                  </Field>
                  <ErrorMessage name="prefecture">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 市区町村 */}
              <div>
                <label htmlFor="city" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>市区町村（必須）
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="city"
                  name="city"
                  type="text"
                  />
                  <ErrorMessage name="city">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 番地 */}
              <div>
                <label htmlFor="address" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>番地等（必須）
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="address"
                  name="address"
                  type="text"
                  />
                  <ErrorMessage name="address">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 建物名・部屋番号 */}
              <div>
                <label htmlFor="building" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>建物名・部屋番号
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="building"
                  name="building"
                  type="text"
                  />
                  <ErrorMessage name="building">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 電話番号 */}
              <div>
                <label htmlFor="phoneNumber" className='middle-text' style = {{margin: '10px 200px 0px 0px'}}>電話番号（必須）
                  <div>
                  <Field style = {{width: '80%', padding: '10px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  />
                  <ErrorMessage name="phoneNumber">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              <button type="button" onClick={handleBack} style={{ margin: '10px 20px 20px 0px', padding: '10px 40px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
                戻る
              </button>
              <button type="submit" style={{ padding: '10px 40px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
                次へ
              </button>
        </div>
      </div>
        </Form>
      )}
    </Formik>
  );
};

export default informationA;
