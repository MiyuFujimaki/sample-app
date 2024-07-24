import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const InformationB = () => {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState("");

  const handleBack = () => {
    router.push('/informationA'); // 前のページに戻る
  };

  return(
    <Formik
    initialValues={{
            siteSource: [],
            favoriteFruits: [] as string[],
            otherSiteSource: '',
          }}
    validationSchema={Yup.object({
            siteSource: Yup.array()
            .required('必須'),
            favoriteFruits: Yup.array()
            .of(Yup.string())
            .min(1, '最低1つ選んでください')
            .max(3, '最大3つまで選んでください'),
            otherSiteSource: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
                  const allData = {
                    ...JSON.parse(sessionStorage.getItem('formData') || '{}'),
                    ...values
                  };
                  console.log(allData); // 全てのデータを確認するためのログ
                  // ここでサーバーにデータを送信するなどの処理を行う
                  sessionStorage.removeItem('formData'); // セッションストレージをクリアする
                  router.push('/confirmation'); // 完了ページへ遷移する
                }}
    >
      {({isSubmitting}) => (
        <Form>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
              <div style={{ margin: '50px 0px 30px 0px'}}>
                <span className="large-text">会員登録</span>
              </div>
              <div style={{ margin: '30px 0px 20px' }}>
                <span className='middle-text'>会員情報入力 1/2</span>
              </div>
              {/* サイト */}
              <div style = {{ textAlign: 'left' ,margin: '10px 0px 0px 20px'}}>
                <label htmlFor="siteSource" className='middle-text'>どこでこのサイトをしりましたか？（必須）
                  <div role='group' aria-labelledby="checkbox-group">
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="siteSource"
                      value="SNS"
                    />SNS
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="siteSource"
                      value="TV CM"
                    />TV CM
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="siteSource"
                      value="雑誌"
                    />雑誌
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="siteSource"
                      value="新聞"
                    />新聞
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="siteSource"
                      value="その他"
                    />その他
                    </div>
                    <div>
                    <Field style = {{width: '40%', padding: '6px', margin: '10px 0', border: '1px solid black', borderRadius: '5px'}}
                      id="otherSiteSource"
                      name="otherSiteSource"
                      type="text"
                      placeholder="Add text"
                  />
                    </div>
                  <ErrorMessage name="siteSource">
                    {msg => <div className='red-color'>{msg}</div>}
                  </ErrorMessage>
                  </div>
                </label>
              </div>
              {/* 果物 */}
              <div style = {{ textAlign: 'left' ,margin: '10px 0px 0px 20px'}}>
                <label htmlFor="siteSource" className='middle-text'>好きな果物を教えてください（最大３つ）
                  <div role='group' aria-labelledby="checkbox-group">
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="favoriteFruits"
                      value="りんご"
                    />りんご
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="favoriteFruits"
                      value="みかん"
                    />みかん
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="favoriteFruits"
                      value="バナナ"
                    />バナナ
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="favoriteFruits"
                      value="ぶどう"
                    />ぶどう
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="favoriteFruits"
                      value="レモン"
                    />レモン
                    </div>
                    <div>
                    <Field style = {{margin: '0px 7px 0px 7px'}}
                      type="checkbox"
                      name="favoriteFruits"
                      value="キウイ"
                    />キウイ
                    </div>
                  <ErrorMessage name="favoriteFruits">
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

export default InformationB;