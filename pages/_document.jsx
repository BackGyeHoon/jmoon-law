import Document, { Html, Head, Main, NextScript } from "next/document";
    export default class CustomDocument extends Document {
      render() {
        return (
          <Html>
            <Head>
              <meta name="keywords" content="시흥, 배곧, 변호사, 법률사무소, lawfirm, law, 문일식, 검찰청, 감사원, 국세청, 민사, 부동산, 임대차, 손해배상, 대여금, 약정금, 물품대금, 미수금, 형사, 사기, 공갈, 협박, 모욕, 명예훼손, 보이스피싱, 성범죄, 마약, 음주, 고소, 고발, 재심, 행정, 조세, 세금, 산재, 학교폭력, 출입국, 수용보상, 자문, 스타트업, 주주총회, 이사회, 경영권분쟁, 기타, 법률상담" />	
              <meta name="Description" content="검찰청/감사원/국세청 출신 문일식 변호가 직접 상담부터 승소까지 책임집니다" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
              <meta property="og:description" content="검찰청/감사원/국세청 출신 문일식 변호가 직접 상담부터 승소까지 책임집니다" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@" />
              <meta name="twitter:description" content="검찰청/감사원/국세청 출신 문일식 변호가 직접 상담부터 승소까지 책임집니다"/>
              <meta name="naver-site-verification" content="" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
              <meta httpEquiv="Cache-Control" content="no-cache" />
            </Head>
            <body>
              <Main />
            </body>
            <NextScript />
          </Html>
        );
      }
    }