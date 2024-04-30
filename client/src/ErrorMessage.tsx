function ErrorMessage ({ message = 'Something went wrong' }: ErrorMessageProps) {
  return <div data-testid='message-container'>{message}</div>;
}

type ErrorMessageProps = {
  message?: string;
};

export default ErrorMessage;
