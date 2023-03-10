module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser', // 구문 분석을 위한 파서
  parserOptions: {
    // ESlint 사용을 위해 지원하려는 js 언어 옵션
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/prop-types': ['error'], // 리액트 컴포넌트의 프로퍼티 타입을 설정해줘야 한다는 설정
    'no-extra-semi': ['error'], // 세미콜론 연속으로 2개 이상 삽입 시 설정
    'react/jsx-filename-extension': [
      // jsx 파일의 확장자 설정
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': ['off'], // jsx 의 스코프 내에 React 변수가 해당 스코프 내에 있어야한다는 설정
    'arrow-parens': ['warn', 'as-needed'], // (parens == parenthesis) 화살표 함수의 파라미터가 하나일때 괄호 생략
    'no-unused-vars': ['off'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': ['off'], // 콘솔을 쓰면 에러가 나던 규칙 해제
    'import/prefer-default-export': ['off'], // export const 문을 쓸때 에러를 내는 규칙 해제
    'react-hooks/exhaustive-deps': ['warn'], // hooks의 의존성 배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙
    'react/jsx-props-no-spreading': ['warn', { custom: 'ignore' }], // props spreading을 허용하지 않는 규칙
    'react/require-default-props': ['off'], // defaultProps 사용 안하니 해제
    'linebreak-style': ['off'], // linebreak 스타일 지정인데 unix, windows에서 linebreak 문자 때문에 에러발생할 수도
    'import/extensions': ['off'], // import 시 확장자명 표시 설정
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-use-before-define': ['off'], // 변수, 함수, 클래스가 선언 되기전에 사용을 금지한다는 설정,
    'import/no-unresolved': ['off'], // import 경로의 파일을 인식할수 없는 상황이 없도록 하는 옵션? (옵션을 사용하면 경로 인식이 안됨)
    'import/no-extraneous-dependencies': ['off'], // 패키지에 선언되지 않은 외부 모듈의 가져오기 설정 (사용하면 에러 발생함)
    'no-shadow': ['error'], // 외부 범위에 선언된 섀도우 변수 선언 허용 여부 설정
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'quote-props': 'error', // 키워드 or '-'포함 속성명에 따옴표 붙이기
    'no-prototype-builtins': 'warn', // Object.prototype 메서드 직접 사용 금지
    'array-callback-return': 'warn', // 배열 메서드 콜백에 반환 문 사용
    'prefer-destructuring': 'error', // [TEST 필요] Use array destructuring
    'func-style': 'off', // 함수 스타일 통일 -> prettier에서 설정
    'no-param-reassign': 'error', // mutate parameter는 사용하지 않는다(redux에서만 사용)
    'import/no-mutable-exports': 'error', // mutable 객체를 export 하는 것에 대해 강제
    'import/no-webpack-loader-syntax': 'warn', // 웹팩 로더 문법 사용 공부 필요
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 반복문의 증감삭에선 ++, -- 연산자 사용이 가능. 연산자와 피연산자 사이에 공백을 두지 않음.
  },
}
