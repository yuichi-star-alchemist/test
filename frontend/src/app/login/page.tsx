"use client"

import InputButton from "@/components/InputButton"
import LinkButton from "@/components/LinkButton"
import MonitorLayout from "@/components/MonitorLayout"
import SubmitButton from "@/components/SubmitButton"
import {
  // VALIDATION_EMAIL as emailPattern,
  VALIDATION_PASSWORD as passwordPattern
} from "@/constants"
import loginRequest from "./loginRequest"

const LoginPage = () => {
  const requires = ["email", "password"]
  return (
    <MonitorLayout
      headerContent
      viewContent={
        <form
          className="h-full flex flex-col justify-around"
          onSubmit={ (e) => loginRequest(e) }
        >
          <InputButton
            type="email"
            inputName={ requires[0] }
            labelValue="メールアドレス"
            // pattern={ emailPattern }うまく機能しないのでコメントアウト
            required
          />
          <InputButton
            type="password"
            inputName={ requires[1] }
            labelValue="パスワード"
            pattern={ passwordPattern }
            required
          />
          <SubmitButton>ログイン</SubmitButton>
        </form>
      }
      naviContent={
        <div className="flex h-full items-center">
          <LinkButton href="/signup">サインアップへ</LinkButton>
        </div>
      }
      footerContent
    />
  )
}

export default LoginPage