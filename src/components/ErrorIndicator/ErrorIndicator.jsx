import { Alert } from 'antd'

export default function ErrorIndicator({ message = 'Что-то пошло не так' }) {
  return (
    <Alert message="Error" description={message} type="error" showIcon />
  )
}

