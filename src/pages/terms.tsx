import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const Terms = () => {
  const formik = useFormik({
    initialValues: {
        agreed: false,
    },
    validationSchema:Yup.object({
        agreed: Yup.boolean()
        .oneOf([true], '利用規約に同意してください。')
        .required('利用規約に同意してください'),
    }),
    onSubmit: (values) => {
        if(values.agreed) {
            router.push('/informationA'); // 次のページに遷移する
        }
    }
  });

  const router = useRouter();

  const termsText = `利用規約
第1章　総則
第1条【定義】
本規約
ストア利用規約
当方
本サービスを利用して開設したオンラインストア運営者
本サービス
当方がインターネットを通じて提供する通信販売サービス
購入者
当方が定める手続に従い、本規約およびプライバシーポリシーの内容を全て了解・承認した上で、商品の申し込みを行う者
利用者
本規約およびプライバシーポリシーの内容を全て了解・承認した上で、当方が本サービスで提供する画像、テキスト、デザイン、ロゴ、映像、プログラム、アイディア、その他の情報（以下、「コンテンツ」）を検索、閲覧または利用する者の総称
第2条【本規約の適用】
当方がインターネットを通じ提供する本サービスを利用者が利用するにあたり、本規約を定めます。利用者は、本サービスの利用開始の時点で本規約の内容を承諾したものとみなします。

第3条【本規約の変更】
当方は、当方が必要と判断する場合、本サービスの目的の範囲内で本規約を変更できます。利用者および購入者が本規約変更後に本サービスを利用した場合には、変更後の本規約に同意したものとみなします。

第2章　商品の購入
第4条【商品の購入】
利用者は、本サービスを利用して当方から商品を購入することができます。
利用者は、商品の購入を希望する場合、当方が別途定める手続に従って、商品の購入を申し込むものとします。
当該申込に伴い、利用者が入力・登録した配達先・注文内容その他の情報を確認の上で注文する旨のボタンをクリックし、その後、当方から注文内容を確認する旨のメールが当該利用者に到達した時点で、利用者と当方との間に当該商品に関する売買契約が成立するものとします。
前項の規定に拘わらず、本サービス利用に関して不正行為または不適当な行為があった場合、当方は売買契約について取消し、解除その他の適切な措置を取ることができるものとします。
未成年の利用者は、適格な法定代理人の事前の同意を得なければ、本サービスを利用して商品の購入をすることができません。
第5条【登録情報の変更】
購入者は、購入時に入力した氏名、住所その他当方に届け出た事項の全部または一部に変更があった場合には速やかに当方に連絡するものとします。また、変更登録がなされた場合でも、変更登録前にすでに手続がなされた取引は変更登録前の情報にもとづいておこなわれるものとします。

第6条【支払方法】
商品の支払い金額は、サイト上に表示されている商品の販売価格と、消費税、配送料、手数料の合計額となります。
本サービスによって購入された商品の支払いに関しては、当方が定める支払方法による支払いに限るものとします。
クレジットカードで支払われる場合は、購入者がクレジットカード会社との間で別途契約する条件に従うものとします。なお、クレジットカードの利用に関連して、購入者とクレジットカード会社の間で何らかの紛争が発生した場合は、購入者とクレジットカード会社との間で責任をもって解決するものとします。
本サービスに指定される決済手段で、かつ購入者と当該決済手段を有する決済会社との間で別途契約（決済手段にかかる規約への同意を含むが、これに限らない。）をする場合、購入者は決済会社との間で別途契約する条件に従うものとします。なお、当該決済手段に関連して、購入者と決済会社の間で何らかの紛争が発生した場合は、購入者と決済会社との間で責任をもって解決するものとします。
第7条【商品の返品】
当方は、購入者からの商品の返品について、サイト上に掲載される【特定商取引法に関する表記】内にある「返品についての特約事項」に従い対応するものとします。

第3章　個人情報の取扱い
第8条【個人情報の取扱い】
当方は、当方が別途定めるプライバシーポリシーに従い、個人情報を取り扱います。

第4章　利用上の責務
第9条【禁止事項】
本サービスの利用に際して、利用者または購入者に対し次の各号の行為を行うことを禁止します。

他の利用者、第三者若しくは当方に迷惑、不利益若しくは損害を与える行為、またはそれらのおそれのある行為
第三者または当方の著作権、商標権、特許権その他の知的財産権、肖像権、人格権、プライバシー権、パブリシティ権その他の権利を侵害する行為またはそれらのおそれのある行為
公序良俗に反する行為その他法令に違反する行為またはそれらのおそれのある行為
本サービスを通じて入手したコンテンツを利用者または購入者が私的使用の範囲外で使用する行為
他の利用者、または他の利用者以外の第三者を介して、本サービスを通じて入手したコンテンツを複製、販売、出版、頒布、公開する行為およびこれらに類似する行為
本サービスおよびその他当方が提供するサービスの運営を妨げる行為
当方の信用を毀損・失墜させる等の当方が不適当であると合理的に判断する行為
その他、当方が不適切と判断する行為
第5章　免責事項
第10条【免責事項】
利用者または購入者が本規約に違反したことによって第三者に生じた損害については、当方は一切責任を負いません。
本サービスの内容および、利用者または購入者が本サービスを通じて得る情報について、その完全性、正確性、確実性、有用性その他一切の事項につきいかなる保証も行いません。
当方は、利用者および購入者に対し、本サービスの利用により発生した一切の損害について、原則としていかなる責任も負わないものとし、当該損害の賠償をする義務もないものとします。ただし、当方と利用者または購入者との間の本規約に基づく契約が消費者契約法（平成12年法律第61号）第2条第3項の消費者契約に該当するなどの理由により免責条項が適用されない場合には、本規約のうち、当方の責任を完全に免責する規定は適用されないものとします。また、本規約に基づく契約が消費者契約に該当し、かつ、当方が債務不履行または不法行為に基づき損害賠償責任を負う場合については、当方に故意または重過失がある場合を除いて、損害発生日からさかのぼって過去一年間以内に購入者が当方に支払った金額を上限として、当方は損害の賠償を行うものとします。`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <div style={{ margin: '30px'}}>
            <span className="large-text">会員登録</span>
        </div>
        <div style={{margin: '30px 0px 10px'}}>
        <span className='middle-text'>利用規約</span>
        </div>
        <textarea readOnly value={termsText} style={{ padding: '10px', width: '80%', height: '150px', marginBottom: '20px', border: '3px solid black', borderRadius: '5px' }} />
        <form onSubmit={formik.handleSubmit}>
            <label>
                <input
                    type="checkbox"
                    id="agreed"
                    checked={formik.values.agreed}
                    onChange={formik.handleChange}
                    style={{
                        marginRight: '10px',
                        marginBottom: '10px'
                    }}
                />利用規約に同意します
            </label>
            <div>
            {formik.errors.agreed ? <div className='red-color'>{formik.errors.agreed}</div> : null}
            <button type="submit" style={{ margin: '4px 0px 0px 0px' ,padding: '10px 40px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
            次へ
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Terms;
