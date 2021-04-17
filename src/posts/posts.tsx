const p = [
  {
    date: '2021-04-17',
    content: `
    hada.io 만들기

    hada.io를 이용하다 보니 나도 만들 수 있겠다는 생각이 들었다. 기능 자체를 구현하는 것이라면 그닥 어렵지 않을 것이다. github pages를 사용한다면 추가적인 서버 세팅 또한 필요없다.
    
    일단 create-react-app으로 리액트 앱을 세팅한 다음,
    npm install --save gh-pages로 gh-pages를 설치하고 package.json에 다음과 같은 내용을 추가했다.
    
    "homepage" : "https://jihunsuh.github.io/blog/"
    {
    "script": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
    }
    
    그리고 npm run deploy를 통해 페이지를 배포한다.
    
    저번에 github pages를 이용해 앱을 만들려고 시도했을 때 react-router가 제대로 안 먹힌다는 문제에서 번번이 막혔었는데, 이번에 뚫어 볼려고 한다.
    
    일단 router를 만드는 방법은 다음과 같다. github pages는 SPA를 지원하지 않지만, 정해진 url 이외의 url에 접속할 경우 리다이렉트되는 404 페이지에서 url을 분석해서 해당 url으로 replace시켜주면 된다.
    
    https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html
    
    이 404.html을 ""src 폴더에"" 복사해 넣으면 된다.
    저번에 내가 제대로 기능을 띄우지 못했던 것도 404.html을 src 폴더가 아닌 프로젝트 루트 폴더에 넣어서 발생했던 문제였다.
        
  `,
  },
];
export const posts = p.reduce(
  (acc, cur) => ({
    ...acc,
    //@ts-ignore
    dates: acc.dates.concat(cur.date),
    [cur.date]: cur.content,
  }),
  { dates: [] },
);
