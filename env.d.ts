// Source - https://stackoverflow.com/a/53981706
// Posted by Karol Majewski, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-03, License - CC BY-SA 4.0

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_AVATAR_URL: string
      NEXT_PUBLIC_AVATAR_WIDTH: `${number}`
      NEXT_PUBLIC_AVATAR_HEIGHT: `${number}`
      NEXT_PUBLIC_MY_EMAIL: string
      NEXT_PUBLIC_MY_GITHUB: string
      NEXT_PUBLIC_MY_CODEBERG: string
      NEXT_PUBLIC_MY_FACEBOOK: string
      NEXT_PUBLIC_MY_ZALO_APP_URL: string
      NEXT_PUBLIC_MY_ZALO_QR_URL: string
      NEXT_PUBLIC_MY_LINKEDIN: string
      NEXT_PUBLIC_MY_EN_CV: string
      NEXT_PUBLIC_MY_VI_CV: string

      RESEND_API_KEY: string
      RESEND_EMAIL_FROM: string

      DOMAIN: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
