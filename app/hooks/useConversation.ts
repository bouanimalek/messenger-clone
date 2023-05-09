import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const converationId = useMemo(() => {
    if (!params?.converationId) {
      return "";
    }

    return params.converationId as string;
  }, [params?.converationId]);

  const isOpen = useMemo(() => !!converationId, [converationId]);

  return useMemo(
    () => ({
      isOpen,
      converationId,
    }),
    [converationId, isOpen]
  );
};

export default useConversation;
