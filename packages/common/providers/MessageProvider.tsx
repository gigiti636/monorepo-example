import type { ReactNode } from "react";
import AlertMessage from "../components/UI/Message";
import Loader from "../components/UI/Loader";

type AppProviderProps = {
  children: ReactNode;
  error_message: string;
  success_message: string;
  loading: boolean;
};

const MessageProvider = ({
  children,
  error_message,
  success_message,
  loading,
}: AppProviderProps) => {
  return (
    <>
      <AlertMessage message={error_message as string} type={"error"} />
      <AlertMessage message={success_message as string} type={"success"} />
      {children}
      {loading && <Loader pageCentered={true} size={80} />}
    </>
  );
};

export default MessageProvider;
