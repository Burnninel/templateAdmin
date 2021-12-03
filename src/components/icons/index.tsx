import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export const IconHome = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const IconAjustes = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

export const IconSino = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

export const IconSair = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

export const IconSol = (tamanho = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tamanho} w-${tamanho}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export const IconLua = (tamanho = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tamanho} w-${tamanho}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export const IconAtencao = (tamanho = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tamanho} w-${tamanho}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export const IconGmail = (tamanho = 7) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`flex items-center h-${tamanho} w-${tamanho}`}
    viewBox="-35 5 110 20"
  >
    <path
      fill="#fff"
      d="M-4.294 28.338c4.03-5.689 11.812-6.163 15.645-5.649-1.066-1.146-3.753-3.279-1.857-6.795C.842 16.96-1.923 11.627-2.318 7.439-3.108.407 3.054-4.649 9.375-4.729H23.36c-.474.435-2.805 1.976-3.358 1.976l-3.674.039c9.363 8.81.276 16.198-1.581 17.738-3.753 4.543 8.02 6.795 7.388 14.499 0 6.992-5.886 11.575-15.091 11.575-10.232-.039-15.13-6.399-11.338-12.76zm20.504 8.494c3.674-2.805 2.805-6.953-.04-9.719-1.699-1.659-3.753-3.239-8.099-2.726-5.097.593-8.81 3.042-8.612 6.874 1.066 8.139 12.8 8.336 16.75 5.531v.04zm-2.489-23.901c4.227-3.477.316-15.604-5.452-15.604-3.674 0-5.57 2.646-5.729 6.4-.276 6.952 6.085 13.392 11.181 9.204zm18.686 4.424l-6.36.04v-3.2h6.282V7.914h3.2v6.282l6.36.039.039 3.161h-6.399v6.321l-3.161.04.039-6.402z"
    />
  </svg>
);
